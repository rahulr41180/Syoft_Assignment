
import { Container } from "./Product.page.style"

import { useState, useEffect } from "react";
import axios from "axios";

export const ProductCreatePage = () => {

    const [formData, setFormData] = useState({
        productName : "",
        productPrice : "",
        productDescription : "",

        productStock : "",
        productCategory : "",
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name] : value
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        let isCookie = document.cookie;
        isCookie = isCookie.split("=");
        isCookie = isCookie[1];

        axios.post("http://localhost:5000/api/product/createProduct", {
            productName : formData.productName,
            productPrice : formData.productPrice,
            productDescription : formData.productDescription,

            productStock : formData.productStock,
            productCategory : formData.productCategory,
            isCookie : isCookie
        })
        .then((res) => console.log("res : ",res))
        .catch((error) => console.log("error : ",error))
        // console.log('data:', data)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} type="text" name="productName" id="" placeholder="Enter Product Name" />
                <input onChange={handleChange} type="text" name="productPrice" id="" placeholder="Enter Product Price" />
                <input onChange={handleChange} type="text" name="productStock" id="" placeholder="Enter Product Stock" />
                <input onChange={handleChange} type="text" name="productCategory" id="" placeholder="Enter Product Category" />
                <textarea onChange={handleChange} name="productDescription" id="" cols="30" rows="4" placeholder="Enter Product Description"></textarea>
                <button type="submit">Create Product</button>
            </form>
        </Container>
    )

}