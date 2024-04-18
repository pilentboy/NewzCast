import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const navigate = useNavigate()

    const [UsersData, setUsersData] = useState([])
    const [token, setToken] = useState()

    const GetUsersInfo = () => {
        const UserData = window.localStorage.getItem("User Info")
        setUsersData(UserData)
    }

    const CheckLoginData = async ({ Username, Password }) => {
        GetUsersInfo()
        const Res = JSON.parse(UsersData)
        if (Username === Res['Username'] && Password === Res['Password']) {
            navigate("/")
        } else {
            alert("login error")
        }
    }

    useEffect(() => {
        GetUsersInfo()
    }, [])




    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, token, GetUsersInfo }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }