import express from "express";
// import dotenv from "dotenv";
import { router as userRouter } from "./routes/userRoute.js"
import mongoose from "mongoose";
import './db/connect.js';
const port = process.env.PORT || 5000

const app = express()

app.use('/api', (userRouter)) 

// mongodb connection
mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Database Connection Established"))
  .catch((e) => console.log(e.message));
console.log('Mongodb connected')

app.listen(port, () => console.log(`Server Running on port ${port}`))
