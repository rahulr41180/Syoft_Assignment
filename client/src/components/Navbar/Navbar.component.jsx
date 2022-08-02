
import { Container } from "./Navbar.component.style";

import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <Container>
            <Link to="/login">Login</Link>
            <Link to="/register">SignUp</Link>
            <Link to="/createProduct">Create Product</Link>

            <Link to="/getProducts">All Product</Link>
        </Container>
    )

}