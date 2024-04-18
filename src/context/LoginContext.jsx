import { createContext, useContext, useState } from "react";

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [Username, setUsername] = useState("username")
    const [token, setToken] = useState("token")

    return (
        <LoginContext.Provider value={{ Username, token }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }