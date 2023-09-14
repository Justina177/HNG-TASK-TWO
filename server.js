import express from "express";
import dotenv from "dotenv";
import { router as userRouter } from "./routes/userRoute.js"
import mongoose from "mongoose";

const port = process.env.PORT || 5000

const app = express()

dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB")
} catch (error) {
    throw error;
}
};
// test to see if app is connected to db by addind or delecting ip address
mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDb Disconnected!")
})

mongoose.connection.on('connected', ()=>{
console.log("mongoDb Connected!")
})

app.use(express.json()); 
app.use('/api', (userRouter)) ;



app.listen(port, () =>{
    connect();
    console.log(`Server Running on port ${port}`)
})
