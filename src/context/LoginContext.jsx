import { createContext, useEffect, useState } from "react";
import UsersDB from '../db.json'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [userTokenInfo, setUserTokenInfo] = useState()
    const [userLoggedInfo, setUserLoggedInfo] = useState()
    const [mainDB,setMainDB]=useState(UsersDB.UsersData)
    const [loading, setLoading] = useState(false)
    const [verifyUser, setVerifyUser] = useState()

 

    const getUserInfo = (userEmail) => {
        const userInfo = mainDB.filter((usersInfo) => usersInfo.email === userEmail)
    
        if (userInfo.length === 1) return userInfo[0]
    }

    const handleUserAuth = () => {
        const userSessionData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
        if (!userSessionData) {
            setUserTokenInfo(null)
            setUserLoggedInfo(null)
        } else {
            setUserTokenInfo(userSessionData)
            setUserLoggedInfo(getUserInfo(userSessionData['user']['email']))
        }
    }

    const handleDeleteUser=()=>{
        const db=mainDB
        const newDB=db.filter(users => users.username !== 'selexted')
        setMainDB(newDB)
    }

    useEffect(() => {

        handleUserAuth()

        if (userLoggedInfo) {
            setVerifyUser(userLoggedInfo['verified'])
        }

    }, [userLoggedInfo])


    return (
        <LoginContext.Provider value={{mainDB, userTokenInfo, setUserTokenInfo, handleUserAuth, userLoggedInfo, loading, setLoading, verifyUser,getUserInfo}}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



