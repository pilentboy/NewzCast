import ColoredLogo from "../ColoredLogo"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import HomeNavLink from "./HomeNavLink"
import { FaHeart } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import UserPic from '../../assets/images/userprof.jpg'
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { CiLogin } from "react-icons/ci";
import ArrowBTN from "./ArrowBTN";
import handleSignOut from "../../utils/handleSignOut";
import { useNavigate } from "react-router-dom";
import OptionBox from "./OptionBox";
import NavTopSmallScreen from "./NavTopSmallScreen";
import UserProfile from "../profile/UserProfile";



function HomeNav() {

    const navigate = useNavigate()
    const { userInfo, userDBJsonInfo, handleUserAuth } = useContext(LoginContext)

    const [optionBoxDisplay, setOptionBoxDisplay] = useState(false)

    const optionBoxItems = [
        'Profile', 'Settings'
    ]

    console.log(userDBJsonInfo, "XQDQ")

    const logOutUser = async () => {
        const res = await handleSignOut()
        if (res) {

            handleUserAuth()
            navigate("/")
        } else {
            alert("error")
        }
    }


    return (
        <>

            <div>
                {/* display logo and user's photo  */}
                <NavTopSmallScreen />

                {/* main nav */}
                <div className="w-full  py-2  fixed bottom-0 left-0  flex flex-col  items-center space-y-2 shadow-md bg-white border-t  border-gray-100  lg:block md:bottom-0 md:border-b md:relative md:rounded-none md:py-7">

                    <ColoredLogo styles={'hidden lg:absolute md:block lg:left-10 lg:top-4'} size={'h-16'} />

                    <ul className="w-screen justify-evenly flex items-center md:justify-between  mx-auto  md:w-460
">


                        <Link to={'/newzcast'} className="text-purple-1000 text-sm border-b border-purple-1000 flex items-center py-2" >
                            <SlEnergy className="text-purple-1000  text-xl mx-1" />

                            Trending
                        </Link>

                        <HomeNavLink target={'favorites'} linkTitle={'Favorites'}>
                            <FaHeart className="duration-200  hover:text-red-700 " />
                        </HomeNavLink>

                        <HomeNavLink target={'search'} linkTitle={'Search'}>
                            <GoSearch />
                        </HomeNavLink>


                        <div className="hidden md:block">

                            {
                                !userInfo ? <HomeNavLink target={'/authenticate'} linkTitle={'Login'}>
                                    <CiLogin />
                                </HomeNavLink> : (

                                    <div className="flex items-center">
                                        <UserProfile username={userDBJsonInfo['firstName']} profileImage={userDBJsonInfo['profileImage']} styles={'flex-row space-x-2'} />
                                        <ArrowBTN action={setOptionBoxDisplay}>
                                            <OptionBox
                                                display={optionBoxDisplay}
                                                items={optionBoxItems}
                                                button={
                                                    <button
                                                        type="button"
                                                        onClick={logOutUser}
                                                        className=" text-gray-400 font-semibold duration-200  text-sm py-1 text-start my-1  hover:text-red-500   "
                                                    >
                                                        Log out
                                                    </button>
                                                }
                                            />
                                        </ArrowBTN>
                                    </div>
                                )
                            }
                        </div>

                    </ul>
                </div>

            </div>

            <Outlet />

        </>


    )
}

export default HomeNav