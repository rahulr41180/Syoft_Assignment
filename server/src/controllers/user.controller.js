
const User1 = require("../models/user.model");

const { body, validationResult } = require('express-validator');

const registerUser = async (req,res,next) => {
    try {
        // console.log("req.body :", req.body);
        const { username, email, mobileNumber, password, role } = req.body;

        const errors = validationResult(req);


        if (!errors.isEmpty()) {

            // console.log('errors.array():', errors.array())
            let error = "";
            for(var i = 0; i<errors.array().length; i++) {
                error += errors.array()[i].msg+", ";
            }
            // console.log('error:', error)
            return res.status(404).json({

                status : false,
                error : error, 
            });
        }

        const user = await User1.create(req.body);

        return res.status(201).json({
            status : true,
            user : user,
        })
    }
    catch(error) {
        return res.status(500).json({
            success : false,
            error : error.message,
        })
    }
}

const loginUser = async (req,res,next) => {
    try {

        const { email } = req.body;
        console.log('email:', email)
        const errors = validationResult(req);
        if (!errors.isEmpty()) {

            // console.log('errors.array():', errors.array())
            let error = "";
            for(var i = 0; i<errors.array().length; i++) {
                error += errors.array()[i].msg+", ";
            }
            // console.log('error:', error)
            return res.status(404).json({
                status : false,
                error : error, 
            });
        }

        const user = await User1.findOne({email : email});
        // console.log('user:', user)
        const token = user.generateToken();
        // sessionStorage.setItem("mySession", JSON.stringify(token));

        // console.log('token:', token)
        // req.session.isAuth = true;
        // console.log(req.session);
        // console.log(req.session.id);

        req.session.isAuth = true;
        
        // console.log('req.session.token:', req.session.token)
        // console.log("req : ",req.session.id);

        // req.session.destroy((error) => {

        //     if(error) {
        //         return res.status(500).json({
        //             status : false
        //         })
        //     }

        //     console.log("Good");
        //     console.log("Good");
            
        //     return;
        // })
        // console.log(req.session.id);

        return res.status(201).json({
            status : true,
            user : user,
            token : token
        })

    }   
    catch(error) {

    }
}


module.exports = {
    registerUser,
    loginUser
}