import { resolve } from 'path' // eslint-disable-line unicorn/prefer-node-protocol -- Node v16
import cookieParser from 'cookie-parser'
import cors from 'cors'
import createError from 'http-errors'
import dotenv from 'dotenv'
import express from 'express'
import logger from 'morgan'

import healthcheck from './healthcheck'

dotenv.config({ path: resolve(process.cwd(), '..', '.env') })

const app = express()
const port = 3000

app.disable('x-powered-by')
app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.get('/*', (req, res, next) => {
  res.header('Permissions-Policy', 'interest-cohort=()')
  res.header('X-Frame-Options', 'DENY')
  next()
})
app.use(express.static(resolve(__dirname, '../web-build')))

app.get('/api', (_, res) => {
  res.redirect(301, '/healthcheck')
})
app.get('/api/healthcheck', healthcheck)

app.get('/api/*', (req, res, next) => {
  return next(createError(404))
})
app.get('/*', (req, res, next) => {
  res.sendFile(resolve(__dirname, '../web-build/index.html'), (error) => {
    if (error) {
      return next(createError(500, error))
    }
  })
})

app.listen(port, () => console.log(`Server running on port ${port}`))
