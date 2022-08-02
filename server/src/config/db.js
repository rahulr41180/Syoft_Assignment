
require("dotenv").config();

const mongoose = require("mongoose");
// console.log(process.env.MONGODB_URL);


const ConnectDB = () => {
    return mongoose.connect("mongodb+srv://rahulr41180:Rahul12345@cluster0.i4t9k.mongodb.net/syoftAssignment?retryWrites=true&w=majority",{
        useNewUrlParser : true,
        useUnifiedTopology : true,
    })
    .then(() => console.log("MongoDB has connected successfully"))
    .catch((error) => console.log("error in MongoDB connection : ", error.message))
}



module.exports = ConnectDB;