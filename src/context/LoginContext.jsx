import { createContext, useEffect, useState } from "react";
import getUsersInfo from "../utils/getUserInfo";
import Users from '../db.json'
const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState()
    const [userDBJsonInfo, setUserDBJsonInfo] = useState()


    const handleUserAuth = () => {
        const userData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
        if (!userData) {
            setUserInfo(null)
            setUserDBJsonInfo(null)
        } else {
            setUserInfo(userData)
            setUserDBJsonInfo(getUsersInfo(userData['user']['email']))
        }
    }

  

    useEffect(() => {
        handleUserAuth()
    }, [])

    return (
        <LoginContext.Provider value={{ userInfo, setUserInfo, handleUserAuth, userDBJsonInfo }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



