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
        
        if (userInfo.length === 1){
			return userInfo[0]
		}
		
		const userSessionData = JSON.parse(localStorage.getItem('sb-sftspirecsaiuswinvmc-auth-token'))
		const updateDB= mainDB
		
		updateDB.push(
			     {
            "firstName": "New",
            "lastName": "User",
            "username": userSessionData['user']['email'].slice(0,5),
            "profileImage":"",
            "email": userSessionData['user']['email'],
            "verified": false,
            "userConnections": [
               {
                "Followers":[]
               },
               {
                "Following":[]
               }
            ],
            "posts": [],
            "favoritePosts":[]
        }
		)
		
		setMainDB(updateDB)
		
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
    }, [userLoggedInfo,mainDB,setMainDB])


    return (
        <LoginContext.Provider value={{mainDB, setMainDB, getUserInfo, userTokenInfo, setUserTokenInfo, handleUserAuth, userLoggedInfo, loading, setLoading, verifyUser}}>
            {children}
        </LoginContext.Provider>
    )
}


export default LoginProvider
export { LoginContext }



