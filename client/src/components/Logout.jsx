
import { Navigate } from "react-router-dom";

export const Logout = () => {

    document.cookie = "syoftToken=;"
    let isCookie = document.cookie;
    isCookie = isCookie.split("=");
    isCookie = isCookie[1];
    // console.log('isCookie:', typeof isCookie)
    if(isCookie == "") {
        console.log("1")

        return (
            <Navigate to="/" replace={false} />
        )
    }


}