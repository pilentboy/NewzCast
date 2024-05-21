import { MdEdit } from "react-icons/md";

function ChangeProfilePic() {
    return (
        <button
            type="button"
            onClick={() => alert("chaning profile pic")}
            className="absolute top-2 right-0 rounded-full p-1 outline outline-[0.5px] outline-gray-100 border border-white bg-purple-1000">
            <MdEdit
                className='text-white'
            />
        </button>

    )
}

export default ChangeProfilePic