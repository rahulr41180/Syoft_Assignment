
import { Container } from "./Navbar.component.style";

import { Link } from "react-router-dom";

export const Navbar = () => {

    let isCookie = document.cookie;
    isCookie = isCookie.split("=");
    isCookie = isCookie[1];
    console.log('isCookie1:', isCookie)
    if(isCookie == "") {

        console.log("Hello");

    }

    return (
        <>
            <Container>
                <Link to="/">Home</Link>
                {isCookie == "" ? 
                    <Link to="/login">Login</Link>
                    :
                    <Link to="/logout">Logout</Link>
                }
                {isCookie == "" ?
                    <Link to="/register">SignUp</Link>
                    :
                    ""
                }
                <Link to="/createProduct">Create Product</Link>

                <Link to="/getProducts">All Product</Link>
            </Container>
        </>
    )

}