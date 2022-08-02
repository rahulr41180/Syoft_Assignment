
import { Container } from "./Register.page.style"

import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar.component";
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

        axios.post("http://localhost:5000/api/user/register", {
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
        <>
            <Navbar />
            <Container>
                <form onSubmit={handleSubmit} action="">
                    <input onChange={handleChange} type="text" name="username" placeholder="Enter Username" />
                    <input onChange={handleChange} type="email" name="email" placeholder="Enter Email" />
                    <input onChange={handleChange} type="number" name="mobileNumber" placeholder="Enter Number" />
                    <input onChange={handleChange} type="password" name="password" placeholder="Enter Password" />

                    <select onChange={handleChange} name="role">
                        <option value="">Select Your Role</option>
                        <option value="admin">Admin</option>
                        <option value="manager">Manager</option>
                        <option value="staff">Staff</option>
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </Container>
        </>
    )

}