
import { Container } from "./Register.page.style"

import { useState, useEffect } from "react";
import { Navbar } from "../../components/Navbar/Navbar.component";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const RegisterPage = () => {

    const [formData, setFormData] = useState({
        username : "",
        email : "",
        mobileNumber : "",
        password : "",

        role : ""
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

        axios.post("https://syoft-assignment-rahul-rathor.herokuapp.com/api/user/register", {
            username : formData.username,
            email : formData.email,
            
            mobileNumber : formData.mobileNumber,
            password : formData.password,
            role : formData.role
        })
        .then((res) => {

            navigate("/login", {replace : false})
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
                <h2>SignUp Page</h2>
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