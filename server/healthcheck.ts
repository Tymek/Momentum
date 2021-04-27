import { Request, Response } from 'express'

const handler = (req: Request, res: Response): void => {
  res.json({
    message: 'OK',
    timestamp: Date.now(),
    uptime: process.uptime(),
  })
}

export default handler
