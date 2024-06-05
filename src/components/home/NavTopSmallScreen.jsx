import ColoredLogo from '../ColoredLogo'
import UserProfile from '../profile/UserProfile'
import { useContext } from 'react'
import { LoginContext } from '../../context/LoginContext'
import HomeNavLink from './HomeNavLink'
import { CiLogin } from "react-icons/ci";

function NavTopSmallScreen() {

    const { userLoggedInfo } = useContext(LoginContext)

    return (
        <div className="flex justify-between items-center w-full px-5 py-2 border-b-8 border-gray-200  bg-white md:hidden ">
            <span> </span>
            <ColoredLogo styles={'ms-6'} />
            {
                userLoggedInfo ? <UserProfile name={userLoggedInfo['username']} styles={'flex-col mt-3'} profileImage={userLoggedInfo['profileImage']} imageSize={'h-8 w-8'} 
				target={`profile/${userLoggedInfo['email']}`} // not test yet
				/> : <HomeNavLink target={'/authenticate'} linkTitle={'Login'}>
                    <CiLogin />
                </HomeNavLink>

            }
        </div>)

}

export default NavTopSmallScreen