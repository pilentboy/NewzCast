import ColoredLogo from "../ColoredLogo"
import { Outlet } from "react-router-dom"
import { Link,NavLink } from "react-router-dom"
import HomeNavLink from "./HomeNavLink"
import { FaHeart } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { CiLogin } from "react-icons/ci";
import ArrowBTN from "./ArrowBTN";
import OptionBox from "./OptionBox";
import NavTopSmallScreen from "./NavTopSmallScreen";
import UserProfile from "../profile/UserProfile";
import Logout from "./Logout";
import { MdHome } from "react-icons/md";





function HomeNav() {

    const { userTokenInfo, userLoggedInfo } = useContext(LoginContext)


    const [optionBoxDisplay, setOptionBoxDisplay] = useState(false)

    const optionBoxItems = [
        'Settings',
		'Favorites'
    ]




    return (
        <>

            <nav className="z-[999]" >

                {/* display logo and usesr's photo  */}
                <NavTopSmallScreen />

                {/* main nav */}
                <div className="w-full py-2  fixed bottom-0 left-0  flex flex-col  items-center space-y-2 shadow-md bg-white border-t  border-gray-100  lg:block md:bottom-0 md:border-b md:relative md:rounded-none md:py-7">

                    <ColoredLogo styles={'hidden lg:absolute md:block lg:left-10 lg:top-4'} size={'h-16'} />

                    <ul className="w-screen justify-evenly flex items-center md:justify-between  mx-auto  md:w-460
">


						
                         <HomeNavLink target={'/newzcast'} linkTitle={'Trending'}>
                              <SlEnergy className="text-xl" />
                        </HomeNavLink>

                         <HomeNavLink target={'/newzcast/search'} linkTitle={'Search'}>
                            <FaSearch />
                        </HomeNavLink>

                        <HomeNavLink target={'/newzcast/home'} linkTitle={'Home'}>
                            <MdHome className="text-[19px]" />
                        </HomeNavLink>


                        <div className="hidden md:block">

                            {
                                !userTokenInfo ? <HomeNavLink target={'/authenticate'} linkTitle={'Login'}>
                                    <CiLogin />
                                </HomeNavLink> : (

                                    <div className="flex items-center">
                                        <UserProfile name={userLoggedInfo['username']} profileImage={userLoggedInfo['profileImage']} styles={'flex-row space-x-2'}
                                            target={`profile/${userLoggedInfo['email']}`}
                                        />
                                        <ArrowBTN action={setOptionBoxDisplay}>
                                            <OptionBox
                                                display={optionBoxDisplay}
                                                items={optionBoxItems}
                                                button={
                                                    <Logout />
                                                }
                                            />
                                        </ArrowBTN>
                                    </div>
                                )
                            }
                        </div>

                    </ul>
                </div>

            </nav>


            < Outlet />
        </>


    )
}

export default HomeNav