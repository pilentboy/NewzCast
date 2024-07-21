import UserProfile from "../profile/UserProfile"
import ConnectionBTN from "../profile/ConnectionBTN"

function UserConnectiosItem({ name, profileImage,email,username,dispalyConnection}) {

    return (
        <div className={`border border-gray-200  rounded-md flex items-center my-1 p-2 ${dispalyConnection ? "justify-between" : "justify-center"}`}>
            <UserProfile styles='space-x-2' name={name}  target={`/newzcast/profile/${email}`} profileImage={profileImage}  />
            {dispalyConnection && <ConnectionBTN customeStyle='w-[100px] h-8  text-sm' username={username}/>}
        </div>)
}

export default UserConnectiosItem