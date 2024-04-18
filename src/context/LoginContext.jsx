import { createContext, useEffect, useState } from "react";

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    
    const [UsersData, setUsersData] = useState([])
    const [token, setToken] = useState()

    const GetUsersInfo = () => {
        const UserData = window.localStorage.getItem("User Info")
        setUsersData(UserData)
    }

    const CheckLoginData = async ({ Username, Password }) => {
        console.log(Username, Password)
        console.log(UsersData)
    }

    useEffect(() => {
        GetUsersInfo()
    }, [])


    return (
        <LoginContext.Provider value={{ UsersData, CheckLoginData, token }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }