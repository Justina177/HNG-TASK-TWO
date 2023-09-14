const mongoose = require ("mongoose");

const UserSchema = new mongoose.Schema (
    {
    name: {
      type: String,
      required: [ true, 'name is required'] 
    }
    },
) 

module.exports = mongoose.model("User", UserSchema)

