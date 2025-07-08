import { useContext } from "react";
import { AuthContext } from "../components/AuthContext";
import { Navigate } from "react-router-dom";

function Admin () {
    const {user} = useContext(AuthContext)
    console.log(user);
    return user ? <div>admin</div> : <Navigate to="/" replace />
}

export default Admin;
