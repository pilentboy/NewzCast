import { IoMdCloseCircle } from "react-icons/io";

export default function CloseBTN({action}) {

    return (
            <button onClick={action} type="button" className=" absolute top-[-12px] right-[-10px]  text-lg  text-purple-1000 ">
                <IoMdCloseCircle />
            </button>
    )
}