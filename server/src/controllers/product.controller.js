
const Product1 = require("../models/product.model");

const ApiFeatures = require("../utils/apiFeatures");

const createProduct = async (req,res,next) => {
    try {
        req.body.userId = req.verifiedUser._id
        const { productName, productPrice, productDescription, productStock, productCategory, userId } = req.body;

        const product = await Product1.create({ productName, productPrice, productDescription, productStock, productCategory, userId });
        console.log('product:', product)

        return res.status(201).json({
            status : "Successfully a new product create",
            product : product
        })
    }
    catch(error) {
        return res.status(500).json({
            status : "error in create Product",
            message : error.message
        })
    }
}

const getAllProducts = async (req,res,next) => {
    try {
        const { verifiedUser, token } = req;
        console.log('token:', token)
        
        console.log('verifiedUser:', verifiedUser)
        const resultPerPage = 5;
        const productCount = await Product1.countDocuments(); // Find How many document have in Product Collection

        const apiFeatures = new ApiFeatures(Product1.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);
        // const products = await Product1.find().lean().exec();

        const products = await apiFeatures.query;

        return res.status(200).json({
            status : "get All Product",
            products : products,
            productCount : productCount,
        })
    }
    catch(error) {
        return res.status(500).json({
            status : "error in get All Products",
            message : error.message
        })
    }
}



module.exports = {
    createProduct,
    getAllProducts
}