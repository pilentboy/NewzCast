function ProfilePic({ size, src }) {
    return (
        <img src={src} className={`rounded-full ${!size ? 'w-7 h-7' : size}   `} />
    )
}

export default ProfilePic