
const express = require("express");

const app = express();
require("dotenv").config();
const ConnectDB = require("./src/config/db");
const cors = require("cors");
const session = require("express-session");
// const MongoDBStore = require('connect-mongodb-session')(session) 

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Setting up connect-mongodb-session store

// console.log('process.env.MONGODB_URL:', process.env.MONGODB_URL)
// const MAX_AGE = 1000 * 60 * 60 * 5 // 5 hrs
// const mongoDBStore = MongoDBStore({
//     uri : process.env.MONGODB_URL,
//     colletion : "mySession"
// })

// app.use(session({
//     secret : "key that will sign cookie",
//     name : "session-id",
//     store : mongoDBStore,
//     cookie : {
//         maxAge : MAX_AGE,
//         sameSite : false,
//         secure : false,
//     },
//     resave : true,
//     saveUninitialized : false,
// }))

const userController = require("./src/routers/user.router");
const productController = require("./src/routers/product.router");

app.use("/api/user", userController);
app.use("/api/product", productController);

app.get("/", async (req,res) => {
    return res.status(200).json({
        message : "Home Route"
    })
})

const server = app.listen(PORT, async () => {

    await ConnectDB();

    console.log(`listening on port ${PORT}`);
})