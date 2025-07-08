import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Logout(){
    const {user, logout} = useContext(AuthContext);
    if(!user) return null;
    return (
        <button onClick={logout}>로그아웃</button>
    )
}

export default Logout;