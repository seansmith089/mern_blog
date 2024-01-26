import express from 'express'
import { updateUser } from '../controllers/user.controllers.js'
import { verifyToken } from '../utils/verifyUser.js'

const router = express.Router()

router.get('/test', (req,res) => {
    res.json({message: "working "})
})

router.post("/test", (req, res) => {
  res.json({ message: "post working " });
});

router.put('/update/:userId', verifyToken, updateUser)

export default router