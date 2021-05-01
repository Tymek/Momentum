import express from 'express'
import verifyActionSecret from '../../utils/verifyActionSecret'
import login from './login'
import logout from './logout'
import me from './me'

const router = express.Router()

router.use(verifyActionSecret)

router.post('/login', login)
router.post('/logout', logout)
router.post('/me', me)

export default router
