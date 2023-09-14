import User from "../model/userModel.js";

//GeT a User by user_id
const getUser = async (req, res) => {
    try {
        const { Id } = req.params;

        const user = await User.findById(Id);

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }
        const users = await User.findById(req.params.user_id)
        if (!users) {
            res.status(404).json({ message: 'the user is not found!' })
        }

        res.json({
            name: user.name,
        });
    }
    catch (err) {
        res.status(500).json({ err: err.message });
   }
};

//Create a new user/person
const createUser = async(req, res) => {
    try{
        // check for user exist
        const existingUser = await User.findOne({ name: req.body.name });

        if (existingUser) {
            return res.status(400).json({ error: 'A User already exist with the same name' });
        }

        const user = new User(req.body);
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ err: err.message });
    }
}

// Updating a by user_id
const updateUser = async (req, res) => {
    try{
        const userId = req.params.userId;
        const updatedUserData = req.body; 

        // findByIdAndUpdate to update the user_id
        const updatedUser = await User.findByIdAndUpdate(userId, updatedUserData, { new: true });
  
        if (!updatedUser) {
            return res.status(404).json({ message: 'User not found' });
        }
  
        res.json({ message: 'User updated successfully', user: updatedUser });
        } catch (error) {
        res.status(500).json({ error: error.message });
        }
    };
  


        
//Deleting a User by user_id
export const deleteUser = async (req, res) => {
    try {
    const user = await User.findByIdAndDelete(req.params.Id);
  
      if (!user) {
        return res.status(404).json({ message: "there is no user with such user_id" });
      }
  
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

export { createUser, getUser, updateUser, deleteUser }

