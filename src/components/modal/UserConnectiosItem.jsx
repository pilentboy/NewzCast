import UserProfile from "../profile/UserProfile"
import ConnectionBTN from "../profile/ConnectionBTN"

function UserConnectiosItem({ name, profileImage,email,username}) {

    return (
        <div className='border border-gray-200  rounded-md flex items-center justify-between my-1 p-2'>
            <UserProfile styles='space-x-2' name={name}  target={`/newzcast/profile/${email}`} profileImage={profileImage}  />
            <ConnectionBTN customeStyle='w-[100px] h-8  text-sm' username={username}/>
        </div>)
}

export default UserConnectiosItem