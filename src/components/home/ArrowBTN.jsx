import { IoIosArrowDown } from "react-icons/io";

function ArrowBTN({ children, action }) {

    return (
        <div className="relative">
            <IoIosArrowDown className="text-black cursor-pointer hidden duration-200 relative  text-xl mx-1 md:block"
                onClick={() => action(v => !v)}
            />
            {children}
        </div>
    )
}

export default ArrowBTN