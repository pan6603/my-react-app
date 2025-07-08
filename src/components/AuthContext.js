import { createContext, useState } from "react";
export const AuthContext = createContext(null);
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const login = () => {
        setUser({username: "user", age: 10});
    }
    const logout = () => {
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}