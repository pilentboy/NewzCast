function ProfilePic({ size, src, imgStyles, button }) {
    return (
        <div className={'relative'} >
            <img src={src} className={`rounded-full ${!size ? 'w-7 h-7' : size}  ${imgStyles}  `} alt="user profile image" />

            {button}

        </div>



    )
}

export default ProfilePic