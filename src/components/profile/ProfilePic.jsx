import blank_img from '../../assets/images/blank_profile.webp'

function ProfilePic({ size, src, imgStyles, button }) {
    return (
        <div className={button ? 'relative' : null} >
            <img src={src ? src : blank_img} className={`rounded-full object-cover	 ${!size ? 'w-7 h-7' : size}  ${imgStyles}  `} alt="user profile image" />

            {button}

        </div>



    )
}

export default ProfilePic