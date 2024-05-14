
function UserProfileActivityInfo() {
    return (
        <ul className="py-2 px-8  flex justify-between items-start">
            <ProfileInfoLI title='Followers' value='240' />
            <ProfileInfoLI title='Following' value='62' />
            <ProfileInfoLI title='Videos' value='2' />
            <ProfileInfoLI title='Newz' value='43' />
        </ul>
    )
}

function ProfileInfoLI({ title, value }) {
    return (
        <li className="flex flex-col items-center space-y-2">
            <span className=" text-sm  text-gray-500 font-medium">
                {title}
            </span>
            <span className="font-extrabold text-purple-1000 text-base">
                {value}
            </span>
        </li>
    )
}


export default UserProfileActivityInfo