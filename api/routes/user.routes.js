import express from 'express'
import { updateUser, deleteUser, signout } from '../controllers/user.controllers.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()


router.put('/update/:userId', verifyToken, updateUser)
router.delete('/delete/:userId', verifyToken, deleteUser)
router.post('/signout', signout)

export default router