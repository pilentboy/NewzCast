import ColoredLogo from '../ColoredLogo'
import UserProfile from '../profile/UserProfile'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
function NavTopSmallScreen() {

    const { userDBJsonInfo } = useContext(LoginContext)
    console.log(userDBJsonInfo, "tqtq")
    return (
        <div className="flex justify-between items-center w-full px-5 py-2 border-b-8 border-gray-200  bg-white md:hidden ">
            <span> </span>
            <ColoredLogo styles={'ms-6'} />
            {
                userDBJsonInfo && <UserProfile userFullName={userDBJsonInfo['firstName']} styles={'flex-col mt-3'} profileImage={userDBJsonInfo['profileImage']} imageSize={'h-8'} />
            }
        </div>)

}

export default NavTopSmallScreen