import ProfilePic from "./ProfilePic"
import { Link } from "react-router-dom"

function UserProfile({ styles, target, username, userNameStyle, profileImage, imageStyle }) {
    return (
        <Link to={!target ? 'profile' : target} className={`flex items-center ${styles}`}>
            <ProfilePic src={profileImage} size={imageStyle} />
            <span className={`text-sm font-sens ${userNameStyle ? userNameStyle : 'text-gray-500'}`}>{username}</span>
        </Link>
    )
}

export default UserProfile