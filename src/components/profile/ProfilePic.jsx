function ProfilePic({ size, src, imgStyles }) {
    return (
        <img src={src} className={`rounded-full ${!size ? 'w-7 h-7' : size}  ${imgStyles}  `} />
    )
}

export default ProfilePic