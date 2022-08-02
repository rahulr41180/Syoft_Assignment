
const jwt = require("jsonwebtoken");

const User1 = require("../models/user.model");

const isAuthentication = async (req,res,next) => {
    console.log("Hello");
    // console.log(req.body);
    const { isCookie } = req.body;
    console.log('isCookie:', isCookie)
    if(isCookie === undefined) {
        return res.status(500).json({
            status : false,
            error : "Please Login Your Self First"
        })
    }

    const verifyUser = jwt.verify(isCookie, process.env.JWT_SECRET)

    const user = await User1.findById(verifyUser._id);

    req.verifiedUser = user
    req.token = isCookie

    next();
}

module.exports = isAuthentication;