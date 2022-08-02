
const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    productName : {
        type : String,
        required : [true, "Please Enter Product Name"],
        trim : true,
    },
    productDescription : {
        type : String,
        required : [true, "Please Enter Product Description"],
    },
    productPrice : {
        type : Number,
        required : [true, "Please Enter Product Price"],
        maxLength : [8, "Price Can not exceed 8 characters"],
    },
    productCategory : {
        type : String,
        required : [true, "Please Enter Product Category"],
    },
    stock : {
        type : Number,
        required : [true, "Please Enter Product Stock"],

        maxLength : [4, "Stock can not exceed 4 characters"],
        default : 1,
    },
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        required : true,
    },
    createdAt : {
        type : Date,
        default : Date.now()
    }
})

const Product1 = mongoose.model("product", ProductSchema);

module.exports = Product1;