
require("dotenv").config();

const mongoose = require("mongoose");
// console.log(process.env.MONGODB_URL);


const ConnectDB = () => {
    return mongoose.connect(process.env.MONGODB_URL,{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => console.log("MongoDB has connected successfully"))
    .catch((error) => console.log("error in MongoDB connection : ", error.message))
}



module.exports = ConnectDB;