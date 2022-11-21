const Register = require("../../Model/Register");
const bycrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const env = require("dotenv");
const { body, validationResult } = require("express-validator");

env.config();

const Login = async (req, res) => {
  try {
    const userPresent = await Register.findOne({ email: req.body.email });
    console.log(userPresent);
    console.log(req.body.password);
    if (userPresent) {
      const validPassword = await bycrypt.compare(req.body.password, userPresent.password);
      console.log(validPassword);
  
      console.log(userPresent.password);
      if (validPassword) {
        const token = jwt.sign({ userPresent }, process.env.SECRETKEY);
        res.json({
          token: token,
        });
      }
    } else {
      res.status(400).json({
        message: "user not found",
      });
    }
  } catch (e) {
    console.log(e.message);
  }
};

const Registeration = async (req, res) => {
  try {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const hashpassword = await bycrypt.hash(req.body.password, 10);
    await Register.create({
      name: req.body.name,
      email: req.body.email,
      password: hashpassword,
    });

    res.status(200).json({
      message: "user register successfully",
    });
  } catch (e) {
    res.status(400).json({
      message: e.message,
    });
  }
};

module.exports = { Login, Registeration };
