function ProfilePic({ size, src, imgStyles, button }) {
    return (
        <div className={button ? 'relative' : null} >
            <img src={src ? src : 'https://i2.wp.com/zubnylekarpodolsky.sk/wp-content/uploads/2013/06/blank_profile.png'} className={`rounded-full ${!size ? 'w-7 h-7' : size}  ${imgStyles}  `} alt="user profile image" />

            {button}

        </div>



    )
}

export default ProfilePic