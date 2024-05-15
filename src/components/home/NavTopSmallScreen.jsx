import UserPic from '../../assets/images/userprof.jpg'
import ColoredLogo from '../ColoredLogo'
import UserProfile from '../profile/UserProfile'
function NavTopSmallScreen() {
    return (
        <div className="flex justify-between items-center w-full px-5 py-2 border-b-8 border-gray-200  bg-white md:hidden ">
            <span> </span>
            <ColoredLogo styles={'ms-6'} />
            <UserProfile username={'Mahdi'} styles={'flex-col mt-3'} profileImage={UserPic} imageSize={'h-8'} />
        </div>)

}

export default NavTopSmallScreen