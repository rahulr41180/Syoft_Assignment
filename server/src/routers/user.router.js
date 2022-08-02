
const express = require("express");

const router = express.Router();
const User1 = require("../models/user.model");
const { body, validationResult } = require('express-validator');
const isAuthentication = require("../middlewares/authentication");
const { registerUser, loginUser } = require("../controllers/user.controller");

router.post("/register", 
body("username").trim().not().isEmpty().withMessage("First Name cannot be Empty").isLength({min : 2}).withMessage("First Name must be atleast 2 characters").custom( async(value) => {
    const user = await User1.findOne({username : value})
    if(user) {
        throw new Error("Username is already taken");
    }
    return true;
}), 
body("email").isEmail().custom( async(value) => {
    const user = await User1.findOne({email : value})
    if(user) {
        throw new Error("Username is already taken");
    }
    return true;
}),
body("mobileNumber").not().isEmpty().withMessage("Mobile Number cannot be Empty").isNumeric().withMessage("Mobile Number must be a number").custom( async(value) => {
    let number = `${value}`;
    if(number.length < 10 || number.length > 10) {
        throw new Error("Mobile Must have 10 Nubmer");
    }
    return true;
}),
body("password").not().isEmpty().withMessage("Password must be required").custom((value) => {

    const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
    if(!value.match(passw)) {
        throw new Error("Password must be strong");
    }
    return true;
}),
registerUser);




let userEmail = "";
router.post("/login", 
body("email").isEmail().custom( async(value) => {
    userEmail = value;
    const user = await User1.findOne({email : value})
    if(!user) {
        throw new Error("Email and Password wrong");
    }
    return true;
}),
body("password").not().isEmpty().withMessage("Password must be required").custom( async(value) => {
    // console.log('value:', value)
    // console.log('userEmail:', userEmail)
    // const passw = /^(?=.*\d)(?=.*[a-z])(?=.*[^a-zA-Z0-9])(?!.*\s).{7,15}$/;
    // if(!value.match(passw)) {
    //     throw new Error("Password must be strong");
    // }
    const user = await User1.findOne({email : userEmail}).select("+password");
    // console.log('user:', user)

    const isPasswordMatched = await user.comparePassword(value);
    // console.log('isPasswordMatched:', isPasswordMatched)

    if(!isPasswordMatched) {
        throw new Error("Email and Password wrong");
    }
    
    return true;
}),
loginUser);

module.exports = router;