const createUser = (req, res) => {
    res.status(200).json({message: 'Get user'})
}

const getUser = (req, res) => {
    res.status(200).json({message: 'Get user'})
}

const updateUser = (req, res) => {
    res.status(200).json({message: 'User details Updated'})
}

const deleteUser = (req, res) => {
    res.status(200).json({message: 'User is deleted'})
}
export { createUser, getUser, updateUser, deleteUser }
