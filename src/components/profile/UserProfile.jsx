import ProfilePic from "./ProfilePic"
import { Link } from "react-router-dom"

function UserProfile({ styles, username, profileImage }) {
    return (
        <Link to={'profile'} className={`flex items-center ${styles}`}>
            <ProfilePic src={profileImage} />
            <span className=" text-gray-500 text-sm font-sens">{username}</span>
        </Link>
    )
}

export default UserProfile