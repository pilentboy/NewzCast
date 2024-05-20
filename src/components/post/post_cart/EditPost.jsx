import { BiDotsVerticalRounded } from "react-icons/bi";
import { useContext } from "react";
import { LoginContext } from "../../../context/LoginContext";
function EditPost() {

    const { userInfo } = useContext(LoginContext)


    return (
        userInfo ? (

            <button type="button"
                className="text-gray-600"
                aria-label="editing post"
                title="Eidit"
                onClick={() => alert("eiditing post")}
            >
                <BiDotsVerticalRounded />
            </button>
        ) : null
    )
}

export default EditPost