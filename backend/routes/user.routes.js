const express = require("express");
const {loginController, findByEmail, findAllDoctors, findAllUsers, updateUser,addUser,deleteUser} = require('../controllers/users.controllers')
//router object
const router = express.Router();

//LOGIN || POST
router.post("/login", loginController);

router.post('/findbyemail/:id', findByEmail);
router.get('/findalldoc', findAllDoctors);
router.get('/all', findAllUsers);
router.post('/update/:id', updateUser);
router.post('/add', addUser);
router.delete('/:id', deleteUser);

module.exports = router;