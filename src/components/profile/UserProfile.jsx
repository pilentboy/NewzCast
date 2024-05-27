import ProfilePic from "./ProfilePic"
import { Link } from "react-router-dom"

function UserProfile({ styles, target, usernameMargin, name, userNameStyle, profileImage, imageSize, imgStyles, profileImageButton, usernameHover }) {
    return (
        <Link to={target ? target : 'profile'} className={`flex items-center ${styles}`}>
            <ProfilePic src={profileImage} size={imageSize} button={profileImageButton} imgStyles={imgStyles} />
            <span className={`font-sens ${userNameStyle ? userNameStyle : 'text-gray-600 text-sm'} ${usernameMargin} ${usernameHover}`}>{name}</span>
        </Link>
    )
}

export default UserProfile