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





function HomeNav({setSearchModalDisplay}) {

    const { userTokenInfo, userLoggedInfo } = useContext(LoginContext)


    const [optionBoxDisplay, setOptionBoxDisplay] = useState(false)

    const optionBoxItems = [
        'Settings',
		'Favorites'
    ]




    return (
        <>

            <nav className="z-[999] " >

                {/* display logo and usesr's photo  */}
                <NavTopSmallScreen />

                {/* main nav */}
<div className="w-4/5  py-3 border border-gray-300 fixed bottom-2 left-[50%] translate-x-[-50%]  flex   rounded-md items-center bg-white space-y-2 shadow-md border-t  md:w-full  lg:block md:bottom-0 md:border-b md:relative md:rounded-none md:py-7">

                    <ColoredLogo styles={'hidden lg:absolute md:block lg:left-10 lg:top-4'} size={'h-16'} />

                    <ul className="w-screen justify-evenly flex items-center md:justify-between  mx-auto  md:w-460
">


						
                         <HomeNavLink target={'/newzcast'} linkTitle={'Trending'}>
                              <SlEnergy className="text-xl" />
                        </HomeNavLink>

                     
					   
						<button type='button' className='font-sans  flex items-center  text-gray-600 text-sm hover:text-gray-600'
                         onClick={()=> setSearchModalDisplay('flex')} > 
						<FaSearch className='mx-2'/>
						Search
						</button>

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
                                                setOptionBoxDisplay={setOptionBoxDisplay}
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