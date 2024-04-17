import { IoMdCloseCircle } from "react-icons/io";

export default function ModalClsoeBTN({ handleClose }) {
    return <button type="button" onClick={() => handleClose((e => e === 'flex' ? 'hidden' : 'flex'))}>
        <IoMdCloseCircle className="text-[20px] text-red-500" />
    </button>
}