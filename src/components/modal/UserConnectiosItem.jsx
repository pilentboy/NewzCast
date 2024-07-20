import UserProfile from "../profile/UserProfile"
import MainButton from "../landing/MainButton"
import { useState } from "react"
import ConnectionBTN from "../profile/ConnectionBTN"

function UserConnectiosItem({ name, profileImage,email, followState}) {

    const [connectionState,setConnectionState]=useState(followState ? followState : false)

    
    return (
        <div className='border border-gray-200  rounded-md flex items-center justify-between my-1 p-2'>
            <UserProfile styles='space-x-2' name={name}  target={`/newzcast/profile/${email}`} profileImage={profileImage}  />
            <ConnectionBTN customeStyle='w-[100px] h-8  text-sm' />
        </div>)
}

export default UserConnectiosItem