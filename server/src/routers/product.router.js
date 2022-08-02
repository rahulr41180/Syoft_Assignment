
const express = require("express");

const router = express.Router();

const isAuthenticated = require("../middlewares/authentication");
const isAuthorized = require("../middlewares/authorization");

const { createProduct, getAllProducts } = require("../controllers/product.controller");

router.post("/createProduct", isAuthenticated, isAuthorized("admin"), createProduct);
router.get("/getProduct", isAuthenticated, isAuthorized("admin","manager"), getAllProducts);



module.exports = router