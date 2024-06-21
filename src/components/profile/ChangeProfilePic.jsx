import { useContext } from "react";
import { MdEdit } from "react-icons/md";
import { LoginContext } from "../../context/LoginContext";

function ChangeProfilePic() {

    const {handleChangeProfilePic}=useContext(LoginContext)

    const handleFileSelect = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.setAttribute('multiple',false)
        input.accept ='image/*'
        input.addEventListener("change", (e) => handleChangeProfilePic(e))
        input.click();
    };

    return (
        <button
            type="button"
            onClick={handleFileSelect}
            className="absolute top-2 -right-4 rounded-full p-1 outline outline-[0.5px] outline-gray-100 border border-white bg-purple-1000">
            <MdEdit
                className='text-white'
            />
        </button>

    )
}

export default ChangeProfilePic