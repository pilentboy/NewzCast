

function UserProfileActivityInfo({ title, value, action, setActivityInfoClickedTitle }) {
    return (
        <li
            className="flex flex-col items-center space-y-2 cursor-pointer"
            onClick={() => {
                action()
                setActivityInfoClickedTitle(title)
            }
            }
        >
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