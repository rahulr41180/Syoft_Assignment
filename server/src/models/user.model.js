
require("dotenv").config();

const mongoose = require("mongoose");

const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        unique : [true, "This username has already taken"],
        required : [true, "Please Enter Your Name"],
    },
    email : {
        type : String,
        required : [true, "Please Enter Your Email"],
        unique : true,
        validate : [validator.isEmail, "Please Enter a valid Email"],
    },
    mobileNumber : {
        type : Number,
        required : [true, "Please Enter Your Mobile Number"]
    },
    password : {
        type : String,

        required : [true, "Please Enter Your Password"],
        select : false, // When we get all user so there will password not showing
    },
    role : {
        type : String,
        default : "staff",   
    },
})

// Middleware For Hashing the Password
UserSchema.pre("save", async function(next) {
    if(!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10)
    next();
})

// Methods For Generate Token
UserSchema.methods.generateToken = function() {
    // console.log('process.env.JWT_SECRET:', process.env.JWT_SECRET)
    // console.log('process.env.JWT_EXPIRE:', process.env.JWT_EXPIRE)
    // console.log('this._id:', this._id)
    // console.log('this._id:', this._id)

    return jwt.sign({_id : this._id}, process.env.JWT_SECRET, {
        expiresIn : process.env.JWT_EXPIRE,
    })
}

// Methods For Compare the Password
UserSchema.methods.comparePassword = async function(comparePass) {
    // console.log('comparePass:', comparePass)
    // console.log('this.password:', this.password)
    return await bcrypt.compare(comparePass, this.password);
}



const User1 = mongoose.model("user", UserSchema);

module.exports = User1;