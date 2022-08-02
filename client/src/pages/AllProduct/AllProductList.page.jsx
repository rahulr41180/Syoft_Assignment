
import { Container } from "./AllProductList.page.style";

import { useState, useEffect } from "react";
import axios from "axios";


export const AllProductList = () => {

    const [allProduct, setAllProduct] = useState([])

    useEffect(() => {
        getData();
    },[])

    const getData = async () => {
        let isCookie = document.cookie;
        isCookie = isCookie.split("=");
        isCookie = isCookie[1];
        axios.post("http://localhost:5000/api/product/getProduct", {
            isCookie : isCookie
        })

        .then((res) => console.log(res))
        .catch((error) => console.log(error))
    }

    return (
        <Container>
            AllProductList
        </Container>
    )

}