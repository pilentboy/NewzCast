import React, { useContext, useState } from 'react'
import { LoginContext } from '../../context/LoginContext'
import { useNavigate } from 'react-router-dom'


function ConnectionBTN() {

    const [userConnection,setUserConnection]=useState(false)
    const {userLoggedInfo}=useContext(LoginContext)
    const navigate=useNavigate()

    const handleUserConnectionChange=()=>{
        if(userLoggedInfo){
            setUserConnection(preV => !preV)
        }else{ 
            navigate("/authenticate")
        }
    }

  return (
    <button type='button'
    onClick={handleUserConnectionChange}
    className={`font-normal w-32 rounded-md h-9 mx-auto mt-5 mb-3 hover:opacity-90 duration-200 
    ${userConnection ? 'bg-white border border-purple-1000 text-purple-1000' : 'bg-purple-1000 text-white'}
    `}
    >
        {userConnection ? 'Follwing' : 'Follow'}
    </button>
  )
}

export default ConnectionBTN