import { resolve } from 'path' // eslint-disable-line unicorn/prefer-node-protocol -- Node v16
import express from 'express'
import dotenv from 'dotenv'

import healthcheck from './healthcheck'

dotenv.config({ path: resolve(process.cwd(), '..', '.env') })

const app = express()
const port = 3000

app.disable('x-powered-by')
app.get('/*', (req, res, next) => {
  res.header('Permissions-Policy', 'interest-cohort=()')
  res.header('X-Frame-Options', 'DENY')
  next()
})

app.get('/api', (_, res) => {
  res.redirect(301, '/healthcheck')
})
app.get('/api/healthcheck', healthcheck)

app.use(express.static(resolve(process.cwd(), '..', 'web-build')))

app.listen(port, () => console.log(`Server running on port ${port}`))
