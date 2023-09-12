import express from "express";
import dotenv from "dotenv";

const port = process.env.PORT || 5000

const app = express()

app.get('/api', (req, res) => {
    res.status(200).json({message: "Get Name"}) 
})

app.listen(port, () => console.log(`Server Running on port ${port}`))
