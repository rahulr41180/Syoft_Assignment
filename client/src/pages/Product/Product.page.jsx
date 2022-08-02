
import { Container } from "./Product.page.style"

import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar.component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ProductCreatePage = () => {

    const [formData, setFormData] = useState({
        productName : "",
        productPrice : "",
        productDescription : "",

        productStock : "",
        productCategory : "",
    })

    const navigate = useNavigate();

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

        axios.post("https://syoft-assignment-rahul-rathor.herokuapp.com/api/product/createProduct", {
            productName : formData.productName,
            productPrice : formData.productPrice,
            productDescription : formData.productDescription,

            productStock : formData.productStock,
            productCategory : formData.productCategory,
            isCookie : isCookie
        })
        .then((res) => {
            // console.log("res : ",res)

            navigate("/getProducts", {replace : false});
        })
        .catch((error) => {
            
            // console.log("error : ",error)
            // console.log("error : ",error.response.data.error)

            alert(error.response.data.error);
        })
        // console.log('data:', data)
    }

    return (
        <>
            <Navbar />
            <Container>

                <h2>Create New Product</h2>
                <form onSubmit={handleSubmit} action="">
                    <input onChange={handleChange} type="text" name="productName"  placeholder="Enter Product Name" />
                    <input onChange={handleChange} type="text" name="productPrice"  placeholder="Enter Product Price" />
                    <input onChange={handleChange} type="text" name="productStock"  placeholder="Enter Product Stock" />
                    <input onChange={handleChange} type="text" name="productCategory"  placeholder="Enter Product Category" />
                    <textarea onChange={handleChange} name="productDescription"  cols="30" rows="4" placeholder="Enter Product Description"></textarea>
                    <button type="submit">Create Product</button>
                </form>
            </Container>
        </>
    )

}