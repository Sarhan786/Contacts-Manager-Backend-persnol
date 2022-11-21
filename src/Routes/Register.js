const express = require("express");
const { body, validationResult } = require('express-validator');

const Post = require("../Model/Register");
const {Login, Registeration} = require("./Callback/RegisterCallback");

const router = express.Router();

router.post("/login", Login);

router.post("/register",body('email').isEmail(), body("name").isAlpha(),
body("password").isLength({ min: 6, max: 16 }), Registeration);

module.exports = router;