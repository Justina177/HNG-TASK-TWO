const express = require("express");

const router = express.Router();

const { createUser, getUser, updateUser, deleteUser } = require("../controllers/user.js");

router.route('/').post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser)

module.exports = router;
