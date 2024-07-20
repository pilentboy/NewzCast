import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../../context/LoginContext';
import { useNavigate } from 'react-router-dom';

function ConnectionBTN({ username }) {
    const [userConnection, setUserConnection] = useState(false);
    const { userLoggedInfo, mainDB, setMainDB } = useContext(LoginContext);
    const navigate = useNavigate();

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
            if (currentUser) {
                const userFollowers = currentUser.userConnections[0].Followers;
                setUserConnection(userFollowers.includes(username));
            }
        }
    }, [mainDB, userLoggedInfo]);

    return (
        <button
            type='button'
            onClick={handleUserConnectionChange}
            className={`font-normal w-32 rounded-md h-9 mx-auto mt-5 mb-3 hover:opacity-90 duration-200 
            ${userConnection ? 'bg-white border border-purple-1000 text-purple-1000' : 'bg-purple-1000 text-white'}`}
        >
            {userConnection ? 'Following' : 'Follow'}
        </button>
    );
}

export default ConnectionBTN;
