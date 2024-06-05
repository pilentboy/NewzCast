import { createContext, useEffect, useState } from "react";
import getUsersInfo from "../utils/getUserInfo";
import UsersDB from '../db.json'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [userTokenInfo, setUserTokenInfo] = useState()
    const [userDBJsonInfo, setUserDBJsonInfo] = useState()
    const [mainDB,setMainDB]=useState(UsersDB.UsersData)
    const [loading, setLoading] = useState(false)
    const [verifyUser, setVerifyUser] = useState()

    const handleUserAuth = () => {
        const userData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
        if (!userData) {
            setUserTokenInfo(null)
            setUserDBJsonInfo(null)
        } else {
            setUserTokenInfo(userData)
            setUserDBJsonInfo(getUsersInfo(userData['user']['email']))
        }
    }

    const getUserInfo = (userEmail) => {
        const userInfo = mainDB.filter((usersInfo) => usersInfo.email === userEmail)
    
        if (userInfo.length === 1) return userInfo[0]
    }
    

    const handleDeleteUser=()=>{
        const db=mainDB
        const newDB=db.filter(users => users.username !== 'selexted')
        setMainDB(newDB)
    }

    useEffect(() => {

        handleUserAuth()

        if(mainDB){
            handleDeleteUser()
        }

        if (userDBJsonInfo) {
            setVerifyUser(userDBJsonInfo['verified'])
        }

    }, [userDBJsonInfo])


    return (
        <LoginContext.Provider value={{mainDB, userTokenInfo, setUserTokenInfo, handleUserAuth, userDBJsonInfo, loading, setLoading, verifyUser,getUserInfo}}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



