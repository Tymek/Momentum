import { access } from 'fs/promises'
import { resolve } from 'path'
import dotenv from 'dotenv'
import express from 'express'
import { createProxyMiddleware } from 'http-proxy-middleware'

import HttpError from './utils/httpError'
import errorHandler from './utils/errorHandler'
import healthcheck from './routes/healthcheck'
import authWebhook from './routes/authWebhook'
// import storage from './routes/storage'
import actions from './routes/actions'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import logger from 'morgan'

dotenv.config({ path: resolve(__dirname, '..', '.env') })

const app = express()
const port = 3000
const clientAppStaticDir = '../../app/web-build'
const adminAppStaticDir = '../../admin/out'
const isWindows = process.platform === 'win32'

app.disable('x-powered-by')

app.use(
  cors({
    origin: '*',
    credentials: true,
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Cookie'],
  }),
)
app.use(logger('dev'))
app.get('/*', (req, res, next) => {
  res.header('Permissions-Policy', 'interest-cohort=()')
  res.header('X-Frame-Options', 'DENY')
  next()
})

// Proxy GraphQL
app.use(
  ['/graphql', '/v1/graphql'],
  createProxyMiddleware({
    target: isWindows ? 'http://localhost:8080' : 'http://hasura:8080',
    pathRewrite: {
      '^/graphql': '/v1/graphql',
    },
    changeOrigin: true,
    // logLevel: 'debug',
  }),
)

// Static client app
app.use(express.static(resolve(__dirname, clientAppStaticDir)))

// Proxy admin panel
if (process.env.NODE_ENV === 'development') {
  app.use(
    '/panel',
    createProxyMiddleware(isWindows ? 'http://localhost:5000' : 'http://admin:5000/'),
  )
} else {
  app.use('/panel', express.static(resolve(__dirname, adminAppStaticDir)))
}

// Backend API
app.use(['/api', '/api/*'], express.json(), express.urlencoded({ extended: false }), cookieParser())
app.get('/api', (_, res) => {
  res.redirect(301, '/api/healthcheck')
})
app.get('/api/healthcheck', healthcheck)
app.use('/api/auth-webhook', authWebhook)
// app.use('/api/storage', storage)
app.use('/api/actions', actions)
app.get('/api/*', () => {
  throw new HttpError(404)
})

// Client app index fallback (and 404)
app.get('/*', async (req, res) => {
  const indexFile = resolve(__dirname, clientAppStaticDir, 'index.html')
  await access(indexFile)

  res.sendFile(indexFile, (error) => {
    if (error) {
      throw new HttpError('Error sending index.html', 500)
    }
  })
})

app.use(errorHandler)

app.listen(port, () => console.log(`Server running on port ${port}`))
