import express from "express";
const router = express.Router()

import { createUser, getUser, updateUser, deleteUser } from "../controllers/user.js";



router.get('/', getUser)

router.post('/', (req, res) => {
    res.status(200).json({ message: "Set user"})
})

router.put('/:id', (req, res) => {
    res.status(200).json({ message: `Update user ${req.params.id}` })
})

router.delete('/:id', (req, res) => {
    res.status(200).json({ message: `Delete user ${req.params.id}` })
})

export {router};
