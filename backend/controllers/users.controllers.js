const userModel = require("../models/users.model")
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken')

const loginController = async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(404).send({
          success: false,
          message: "Invalid email or password",
        });
      }
      const user = await userModel.findOne({ email });
      if (!user) {
        return res.status(404).send({
          success: false,
          message: "Email is not registerd",
        });
      }
  // Check if the user's email is verified
//   if (!user.isEmailVerified) {
//     return res.status(403).send({
//       success: false,
//       message: 'Email is not verified. Please check your email for verification instructions.',
//     });
//   }
  
      // const match = await bcrypt.compare(password, user.password);
      // if (!match) {
      //   return res.status(200).send({
      //     success: false,
      //     message: "Invalid Password",
      //   });
      // }
      const token = await JWT.sign({ _id: user._id }, process.env.jwtSecret, {
        expiresIn: "7d",
      });
  
  
      res.status(200).send({
        success: true,
        message: "login successfully",
        user: {
          _id: user._id,
          name: user.name,
          email: user.email
        },
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in login",
        error,
      });
    }
  
    
  };

  //......................................


// Controller functions
const findByEmail = async (req, res) => {
  try {
    const users = await userModel.find({ email: req.params.id });
    res.json(users);
  } catch (err) {
    res.status(400).json('Error:' + err);
  }
};

const findAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: "Doctor" });
    res.json(doctors);
  } catch (err) {
    res.status(400).json('Error:' + err);
  }
};

const findAllUsers = async (req, res) => {
  try {
    const users = await userModel.find();
    res.json(users);
  } catch (err) {
    res.status(400).json('Error:' + err);
  }
};

const updateUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json('User not found');
    }

    user.hourlyrate = req.body.hourlyrate;
    user.perpatientrate = req.body.perpatientrate;
    user.paidtype = req.body.paidtype;
    user.name = req.body.name;
    user.timeZone = req.body.timeZone;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.password = req.body.password;
    user.role = req.body.role;

    await user.save();
    res.json('User Data Updated');
  } catch (err) {
    res.status(400).json('Error:' + err);
  }
};

const addUser = async (req, res) => {
  try {
    const {
      hourlyrate,
      perpatientrate,
      paidtype,
      name,
      timeZone,
      email,
      phone,
      password,
      role
    } = req.body;

    const newUser = new userModel({
      hourlyrate,
      perpatientrate,
      paidtype,
      name,
      timeZone,
      email,
      phone,
      password,
      role
    });

    await newUser.save();
    res.json(newUser);
  } catch (err) {
    res.status(400).json('Error:' + err);
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.json('User Deleted');
  } catch (err) {
    res.status(400).json('Error:' + err);
  }
};

module.exports = {
  findByEmail,
  findAllDoctors,
  findAllUsers,
  updateUser,
  addUser,
  deleteUser,
  loginController
};
