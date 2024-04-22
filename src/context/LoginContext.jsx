import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";


const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const navigate = useNavigate()

    const [UsersData, setUsersData] = useState([])
    const [loginRes, setLoginRes] = useState(null)


    const CheckLoginData = async ({ Email, Password }) => {
        console.log(Email,Password)

    }

    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, loginRes }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



