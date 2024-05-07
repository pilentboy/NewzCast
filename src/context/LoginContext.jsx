import { createContext, useEffect, useState } from "react";


const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState()

    const handleUserAuth = () => {
        const userData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
        if (!userData) {
            setUserInfo(null)
        } else {
            setUserInfo(userData)
        }
        console.log(userData)
    }

    useEffect(() => {
        handleUserAuth()
    }, [])

    return (
        <LoginContext.Provider value={{ userInfo, setUserInfo, handleUserAuth }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



