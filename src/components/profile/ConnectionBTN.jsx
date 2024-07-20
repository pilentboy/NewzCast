import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

function ConnectionBTN({ username, customeStyle}) {
    const [userConnection, setUserConnection] = useState(false);
    const { userLoggedInfo, mainDB, setMainDB } = useContext(LoginContext);
    const navigate = useNavigate();

    const updateUserFollowing= (username,unfollow) =>{
       
        setMainDB( prevDB => {
            const updateDB= [...prevDB]
            const userProfileInfoIndex=updateDB.findIndex(user => user.username === username)
            const userProfileInfo=updateDB[userProfileInfoIndex]
            const following=userProfileInfo['userConnections'][1].Following

            if(unfollow){
                const newFollowing=following.filter(user => user !== userLoggedInfo.username)
                userProfileInfo.userConnections[1].Following= newFollowing
                updateDB[userProfileInfoIndex]=userProfileInfo
            }else{
                userProfileInfo.userConnections[1].Following.push(userLoggedInfo.username)
                updateDB[userProfileInfoIndex]=userProfileInfo
            }

            return updateDB

        })
        
    }

    const handleUserConnectionChange = () => {
        if (userLoggedInfo) {
            setMainDB(prevDB => {
                const updateDB = [...prevDB];
                const currentUserIndex = updateDB.findIndex(user => user.email === userLoggedInfo.email);
                const userInfo = updateDB[currentUserIndex]
                const userFollowers = userInfo.userConnections[0].Followers;

                if (userConnection) {
                    const updatedFollowers = userFollowers.filter(user => user !== username);
                    userInfo.userConnections[0].Followers = updatedFollowers;
                } else {
                    userFollowers.push(username);
                    userInfo.userConnections[0].Followers = userFollowers;
                }
                updateUserFollowing(username,userConnection)

                updateDB[currentUserIndex] = userInfo;
                return updateDB;
            });
        } else {
            navigate("/authenticate");
        }
    };

    useEffect(() => {
        if (userLoggedInfo) {
            const currentUser = mainDB.find(user => user.email === userLoggedInfo.email);
            const userFollowers = currentUser.userConnections[0].Followers;
            setUserConnection(userFollowers.includes(username));
            
        }else{
            setUserConnection(false)
        }
    }, [mainDB, userLoggedInfo]);

    return (
       <button
            type='button'
            onClick={handleUserConnectionChange}
            className={`font-normal rounded-md  hover:opacity-90 duration-200 
                ${customeStyle ? customeStyle : 'mx-auto mt-5 mb-3 w-32 h-9'}
            ${userConnection ? 'bg-white border border-purple-1000 text-purple-1000' : 'bg-purple-1000 text-white'}`}
        >
            {userConnection ? 'Following' : 'Follow'}
        </button>
    
     
    );
}

export default ConnectionBTN;
