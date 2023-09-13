import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export const connectDB = { 
    mongodb_connection_url: process.env.MONGO,

}

// export const connectDB = async () => {
//     try {
//         const conn = await mongoose.connect(process.env.MONGO)

//         console.log(`MongoDB connected: ${conn.connection.host}`);

//     } catch (error) {
//         console.log(error);
//         process.exit(1)
//     }
// }

