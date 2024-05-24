import { BiDotsVerticalRounded } from "react-icons/bi";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../../context/LoginContext";

function EditPost({ postID }) {

    const { userDBJsonInfo } = useContext(LoginContext)

    const [enableEdit, setEnableEdit] = useState(false)

    const handleEnableEditgPost = () => {
        const res = userDBJsonInfo.posts.filter(post => post['postID'] === postID)
        console.log(res.length)
        if (res.length >= 1) {
            setEnableEdit(true)
        } else {
            setEnableEdit(false)
        }
    }

    useEffect(() => {
        if (userDBJsonInfo) {
            handleEnableEditgPost()
        }
    }, [userDBJsonInfo])


    return (
        enableEdit ? (

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