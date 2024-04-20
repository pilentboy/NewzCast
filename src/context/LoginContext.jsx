import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const navigate = useNavigate()

    const [UsersData, setUsersData] = useState([])
    const [loginRes, setLoginRes] = useState(null)

    const [token, setToken] = useState()

    const GetUsersInfo = () => {
        const UserData = window.localStorage.getItem("User Info")
        setUsersData(UserData)
        console.log(UserData, "from context")
    }

    const CheckLoginData = async ({ Username, Password }) => {
        GetUsersInfo()
        if (window.localStorage.getItem("User Info")) {
            const Res = JSON.parse(UsersData)
            console.log(Res)
            if (Username === Res['Username'] && Password === Res['Password']) {
                setLoginRes(false)
                alert("logged in successfuly!")
                navigate("/")
            } else {
                console.log("login error")
                setLoginRes(true)
            }
        } else {
            console.log("no data")
        }


    }

    useEffect(() => {
        GetUsersInfo()
    }, [])




    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, GetUsersInfo, loginRes }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }