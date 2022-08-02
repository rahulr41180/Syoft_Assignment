
import { Container } from "./Login.page.style"

import { useState, useEffect } from "react";
import axios from "axios";

export const LoginPage = () => {

    const [formData, setFormData] = useState({
        email : "",
        password : "",
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

        axios.post("https://syoft-assignment-rahul-rathor.herokuapp.com/api/user/login", {
            email : formData.email,
            password : formData.password,
        })
        .then((res) => setToken(res))
        .catch((error) => console.log("error : ",error))
        // console.log('data:', data)
    }

    const setToken = (res) => {
        console.log('res:', res)
        console.log('res:', res.data.token);
        var expires = (new Date(Date.now()+ 86400*1000)).toUTCString();
        document.cookie = `syoftToken=${res.data.token}; expires=` + expires + ";path=/;"
        // document.cookie = "syoftToken="+res.data.token
        console.log("res :", document.cookie)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} type="email" name="email" id="" placeholder="Enter Email" />
                <input onChange={handleChange} type="password" name="password" id="" placeholder="Enter Password" />
                <button type="submit">Submit</button>
            </form>
        </Container>
    )

}