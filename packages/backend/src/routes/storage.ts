import { resolve } from 'path'
import fs from 'fs'
import express from 'express'
import Formidable from 'formidable'
import errorHandler from '../utils/errorHandler'

const router = express.Router()

const storageDir = resolve(__dirname, '../../data/uploads')

fs.mkdirSync(storageDir, { recursive: true })

// router.get('/', function (req, res) {
// TODO: list of files? -- for debugging
// })

// router.get('/:file', function (req, res) {
//   const { file } = req.params
//   res.send(file)
// })

router.get('/', (req, res) => {
  res.send(`
    <h2>With <code>"express"</code> npm package</h2>
    <form action="/api/storage/upload" enctype="multipart/form-data" method="post">
      <div>Text field title: <input type="text" name="title" /></div>
      <div>File: <input type="file" name="someExpressFiles" /></div>
      <input type="submit" value="Upload" />
    </form>
  `)
})

router.post('/upload', (req, res, next) => {
  const form = new Formidable({ multiples: false })

  form.parse(req, (err, fields, files) => {
    if (err) {
      next(err)
      return
    }
    res.json({ fields, files })
  })
})

router.use(errorHandler)

export default router
