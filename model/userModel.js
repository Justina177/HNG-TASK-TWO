import mongoose from "mongoose";

const UserSchema = new mongoose.Schema (
    {
    name: {
      name: String,
    }
    },
) 

export default mongoose.model("User", UserSchema)