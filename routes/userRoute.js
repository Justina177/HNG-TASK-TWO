import express from "express";

const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({ message: "Get name"})
})

router.post('/', (req, res) => {
    res.status(200).json({ message: "Set name"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update name ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete name ${req.params.id}` })
})

export {router};
