const User = require("../model/userModel.js");

// GeT a User by user_id
const getUser = async (req, res) => {
    try {
        const users = await User.findById(req.params.id);
        if (!users) {
            res.status(404).json({ message: "the user does not exist" })
        }
        else {
            res.status(200).json(users);
        }
    } catch (err) {
        console.log(err.mesage)
        res.status(500).json({ message: "Internal server error" })
    }
}

//Create a new user/person
const createUser = async(req, res) => {
    const { name } = req.body
    if (!name) {
        res.status(400).json({ message : "name field is required"})
    }
    try{
        const newUser = await User.create({name})
        res.status(201).json(newUser) 
        console.log(newUser)
        
    } catch (err) {
        res.status(500).json({message: "Internal Server error"})
        console.log(err.message)
        
    }
}


// Updating a by user_id
const updateUser = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(404)({ message: "User not found" })
        
    }

    const updatedUser = await User.findByIdAndUpdate (
        req.params.id, 
        req.body, {
        new: true
    })

    res.status(200).json(updatedUser)
}
          
            
// Deleting a user by user_id
const deleteUser = async (req, res) => {
    const user = await User.findById(req.params.id)

    if (!user) {
        res.status(404)({ message: "User not found" })  
    }

    await user.deleteOne()

    res.status(200).json({ id: req.params.id })
}
    

module.exports = { createUser, getUser, updateUser, deleteUser }

