import ProfilePic from "./ProfilePic"
import { Link } from "react-router-dom"

function UserProfile({ styles, target, userFullName, userNameStyle, profileImage, imageSize, imgStyles, profileImageButton }) {
    return (
        <Link to={!target ? 'profile' : target} className={`flex items-center ${styles}`}>
            <ProfilePic src={profileImage} size={imageSize} button={profileImageButton} imgStyles={imgStyles} />
            <span className={`font-sens ${userNameStyle ? userNameStyle : 'text-gray-500 text-sm'} `}>{userFullName}</span>
        </Link>
    )
}

export default UserProfile