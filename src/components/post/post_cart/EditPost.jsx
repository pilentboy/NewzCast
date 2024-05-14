import { BiDotsVerticalRounded } from "react-icons/bi";

function EditPost() {
    return (
        <button type="button"
            className="text-gray-600"
            aria-label="editing post"
            title="Eidit"
            onClick={() => alert("eiditing post")}
        >
            <BiDotsVerticalRounded />
        </button>
    )
}

export default EditPost