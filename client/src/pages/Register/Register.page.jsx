
import { Container } from "./Register.page.style"

import { useState, useEffect } from "react";
import axios from "axios";

export const RegisterPage = () => {

    const [formData, setFormData] = useState({
        username : "",
        email : "",
        mobileNumber : "",
        password : "",

        role : ""
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

        axios.post("https://syoft-assignment-rahul-rathor.herokuapp.com/api/user/register", {
            username : formData.username,
            email : formData.email,
            
            mobileNumber : formData.mobileNumber,
            password : formData.password,
            role : formData.role
        })
        .then((res) => console.log("res : ",res))
        .catch((error) => console.log("error : ",error))
        // console.log('data:', data)
    }

    return (
        <Container>
            <form onSubmit={handleSubmit} action="">
                <input onChange={handleChange} type="text" name="username" id="" placeholder="Enter Username" />
                <input onChange={handleChange} type="email" name="email" id="" placeholder="Enter Email" />
                <input onChange={handleChange} type="number" name="mobileNumber" id="" placeholder="Enter Number" />
                <input onChange={handleChange} type="password" name="password" id="" placeholder="Enter Password" />

                <select onChange={handleChange} name="role" id="">
                    <option value="">Select Your Role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="staff">Staff</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </Container>
    )

}