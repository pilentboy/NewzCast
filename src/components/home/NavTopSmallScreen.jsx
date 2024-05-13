import UserPic from '../../assets/images/userprof.jpg'
import ProfilePic from '../profile/ProfilePic'
import ColoredLogo from '../ColoredLogo'
import { Link } from "react-router-dom"

function NavTopSmallScreen() {
    return (
        <div className="flex justify-between items-center w-full px-4 py-2 border-b-8 border-gray-200  bg-white md:hidden ">
            <span> </span>
            <ColoredLogo styles={'ms-6'} />
            <div className="flex flex-col items-center mt-3">
                <ProfilePic src={UserPic} />
                <span className=" text-gray-500 text-sm font-sens">Username</span>
            </div>
        </div>)
}

export default NavTopSmallScreen