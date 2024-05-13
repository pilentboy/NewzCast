import HomeContainer from "../components/home/HomeContainer"
import UserProfile from "../components/profile/UserProfile"
import pic from '../assets/images/userprof.jpg'
import ColoredLogo from "../components/ColoredLogo"
import UserID from "../components/profile/UserID"
import { IoIosInformationCircleOutline } from "react-icons/io";
import UserProfileInfo from "../components/profile/UserProfileInfo"

const Profile = () => {

    return (
        <HomeContainer>
            <div className="flex flex-col w-[370px]   h-[360px] py-3 border border-gray-200 rounded-md md:w-460 ">

                <div className="flex flex-col border-b border-gray-200 pb-10 ">
                    <div className="flex flex-col items-center">
                        <UserProfile profileImage={pic} target={' '} username={'Mahdi'} styles={'flex-col space-y-2'} imageStyle={'h-20 border-4 border-purple-1000 '} userNameStyle={'text-purple-1000'} />
                        <UserID id='pilentboy' />
                    </div>
                    <div className="flex justify-between items-center px-10 mt-3">
                        <span></span>
                        <ColoredLogo target={' '} />
                        <IoIosInformationCircleOutline className='text-2xl text-purple-1000' />
                    </div>

                </div>

                <UserProfileInfo />

            </div>
        </HomeContainer>

    )
}

export default Profile