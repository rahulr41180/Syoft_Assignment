
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) =>{
    let isCookie = document.cookie;
    isCookie = isCookie.split("=");

    isCookie = isCookie[1];
    // console.log('isCookie:', isCookie)

    if(isCookie === "")
    {
        return (
            <Navigate to = "/login" replace = {false}/>
        )
    }

    return children;
}