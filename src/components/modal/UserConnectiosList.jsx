import { useContext, useEffect, useState } from 'react'
import UserConnectiosItem from './UserConnectiosItem'
import { LoginContext } from '../../context/LoginContext'

function UserConnectiosList({ title,userEmail}) {

    const {mainDB}=useContext(LoginContext)
    const [userConnections,setUserConnections]=useState([])

    const handleConnectionList=()=>{
        const user=mainDB.filter(user => user.email === userEmail)[0]
        const connectionList=user['userConnections'].filter(connectionType => connectionType[title])[0] // find what connection's requrested
        const connectionUsernames= connectionList[Object.keys(connectionList)[0]]
        return connectionUsernames
    }

    useEffect(()=>{
        if(title){
            setUserConnections(handleConnectionList())
        }
    },[title])


    return (
        <div className="w-[330px] h-[400px] p-4  bg-white rounded-md flex flex-col relative">
            <div className="flex justify-center items-center pb-4">
                <span className=' font-bold text-[15px]'>{title}</span>
            </div>

            <div className='overflow-y-auto  no-scrollbar'>

                {
                    userConnections.length > 0 ? (
                        mainDB.map((user,index) => {
                            return (
                                userConnections.map(username => {
                                    if(user.username === username){
                                        return  <UserConnectiosItem name={username} profileImage={user.profileImage} email={user.email} followState={true} 
                                        key={index} />
                                    }
                                   
                                })
                            )
                     
                        })
                    ) : <h1 className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%]'>No {title}</h1>
                }
             
            </div>

        </div>
    )
}

export default UserConnectiosList