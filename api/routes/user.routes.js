import express from 'express'

const router = express.Router()

router.get('/test', (req,res) => {
    res.json({message: "working "})
})

router.post("/test", (req, res) => {
  res.json({ message: "post working " });
});

export default router