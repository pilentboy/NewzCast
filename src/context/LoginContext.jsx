import { createContext, useEffect, useState } from "react";


const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [userInfo, setUserInfo] = useState([])


    useEffect(() => {
        console.log(userInfo)
    }, [userInfo])

    return (
        <LoginContext.Provider value={{ userInfo, setUserInfo }}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



