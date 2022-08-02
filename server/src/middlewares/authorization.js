
const isAuthorized = (...roles) => {
    // console.log('roles:', roles)

    // 403 System understand what we want but system refused that task.
    return (req,res,next) => {
        // console.log('req.verifiedUser:', req.verifiedUser.role)
        if(!roles.includes(req.verifiedUser.role)) {
            return res.status(500).json({
                status : false,
                error : `Role : ${req.verifiedUser.role} is not authorized to access this resource`
            })
        }

        next();
    }
}



module.exports = isAuthorized;