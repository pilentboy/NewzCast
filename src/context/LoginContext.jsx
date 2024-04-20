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
        console.log(UserData, "from context")
    }

    const CheckLoginData = async ({ Username, Password }) => {
        const Res = JSON.parse(UsersData)
        if (Username === Res['Username'] && Password === Res['Password']) {
            alert("logged in successfuly!")
            navigate("/")
        } else {
            alert("login error")
        }
    }

    useEffect(() => {
        GetUsersInfo()
    }, [])




    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, GetUsersInfo }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }