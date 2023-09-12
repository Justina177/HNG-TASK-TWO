import express from "express";
import dotenv from "dotenv";
import { router as userRouter } from "./routes/userRoute.js"

const port = process.env.PORT || 5000

const app = express()

app.use('/api', (userRouter)) 

app.listen(port, () => console.log(`Server Running on port ${port}`))
