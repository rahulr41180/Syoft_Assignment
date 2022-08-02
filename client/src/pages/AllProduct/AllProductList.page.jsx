
import { Container } from "./AllProductList.page.style";

import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar.component";
import axios from "axios";


export const AllProductList = () => {

    const [allProduct, setAllProduct] = useState([])
    console.log('allProduct:', allProduct)

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        let isCookie = document.cookie;
        isCookie = isCookie.split("=");
        isCookie = isCookie[1];
        console.log('isCookie:', isCookie)
        axios.post("https://syoft-assignment-rahul-rathor.herokuapp.com/api/product/getProduct", {
            isCookie : isCookie
        })

        .then((res) => setAllProduct(res.data.products))
        .catch((error) => console.log(error))
    }

    return (
        <>
            <Navbar />
            <Container>
                {allProduct.map((element,index) => {
                    
                    return (
                        <div key={element._id}>
                            <h2>Item : {index+1}</h2>
                            <p>Product Name : {element.productName}</p>
                            <p>Product Price : ₹ {element.productPrice}</p>
                            <p>Product Description : {element.productDescription}</p>
                            <p>Product Category : {element.productCategory}</p>
                        </div>
                    )
                    
                })}
            </Container>
        </>
    )

}