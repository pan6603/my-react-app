import { useContext } from "react";
import { AuthContext } from "./AuthContext";

function Login() {
    const {user, login} = useContext(AuthContext);
    if(user) return null;
    return (
        <button onClick={login}>로그인</button>
    )
}

export default Login;