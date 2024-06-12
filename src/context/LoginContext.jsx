import { createContext, useEffect, useState } from "react";
import UsersDB from '../db.json'

const LoginContext = createContext()

const LoginProvider = ({ children }) => {

    const [mainDB,setMainDB]=useState(UsersDB.UsersData)
    const [userTokenInfo, setUserTokenInfo] = useState()
    const [userLoggedInfo, setUserLoggedInfo] = useState()
    const [loading, setLoading] = useState(false)
    const [verifyUser, setVerifyUser] = useState()

 

    const getUserInfo = (userEmail) => {
        const userInfo = mainDB.filter((usersInfo) => usersInfo.email === userEmail)
        
        if (userInfo.length === 1) return userInfo[0]
    }
    
    const handleDeleteUser=(useremail)=>{
        const db=mainDB
        const newDB=db.filter(users => users.email !== useremail)
        setMainDB(newDB)
		console.log(newDB)
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



    useEffect(() => {

        handleUserAuth()

        if (userLoggedInfo) {
            setVerifyUser(userLoggedInfo['verified'])
        }
		
		if(mainDB){
			handleDeleteUser("sirxmahddi79@gmail.com")
		}
		
    }, [userLoggedInfo])


    return (
        <LoginContext.Provider value={{mainDB,handleDeleteUser, getUserInfo, userTokenInfo, setUserTokenInfo, handleUserAuth, userLoggedInfo, loading, setLoading, verifyUser,}}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



