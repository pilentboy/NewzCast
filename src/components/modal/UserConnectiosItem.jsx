import UserProfile from "../profile/UserProfile"
import MainButton from "../landing/MainButton"
import { useState } from "react"

function UserConnectiosItem({ name, profileImage,email, followState}) {

    const [connectionState,setConnectionState]=useState(followState ? followState : false)

    
    return (
        <div className='border border-gray-200 rounded-md flex items-center justify-between my-1 p-2'>
            <UserProfile styles='space-x-2' name={name}  target={`/newzcast/profile/${email}`} profileImage={profileImage}  />
            <MainButton
                title={connectionState ? 'Following' : 'Follow'}
                styles={`w-[100px] h-8  text-sm font-normal  ${connectionState ? ' bg-transparent border border-purple-1000 text-purple-1000' : 'bg-purple-1000 text-white'}`}
                lgBTN={false} type='button'
                action={() => setConnectionState(s => !s)}
            />
        </div>)
}

export default UserConnectiosItem