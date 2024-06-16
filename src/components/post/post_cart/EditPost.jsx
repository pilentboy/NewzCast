import { BiDotsVerticalRounded } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";

function EditPost({children,postID, setDisplayPostEdit}) {

    const { userLoggedInfo } = useContext(LoginContext)

    const [enableEdit, setEnableEdit] = useState(false)

    const handleEnableEditgPost = () => {
        const res = userLoggedInfo.posts.filter(post => post['postID'] === postID)
        if (res.length >= 1) {
            setEnableEdit(true)
        } else {
            setEnableEdit(false)
        }
    }

    useEffect(() => {
        if (userLoggedInfo) {
            handleEnableEditgPost()
        }else{
			setEnableEdit(false)
		}
    }, [userLoggedInfo])


    return (
        enableEdit ? (
            <div className="relative">

                <button type="button"
                        className="text-gray-600 p-1 hover:bg-gray-200  duration-200 rounded-md"
                        aria-label="editing post"
                        title="Eidit"
                        onClick={() => setDisplayPostEdit(pre => !pre)}
                    >
                        <BiDotsVerticalRounded />
                </button>

            {children}
            </div>
        ) : null
    )
}

export default EditPost