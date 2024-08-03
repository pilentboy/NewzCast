import ColoredLogo from "../ColoredLogo"
import { Outlet } from "react-router-dom"
import HomeNavLink from "./HomeNavLink"
import { SlEnergy } from "react-icons/sl";
import { IoHomeOutline } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { CiLogin } from "react-icons/ci";
import ArrowBTN from "./ArrowBTN";
import DropDown from "./DropDown";
import NavTopSmallScreen from "./NavTopSmallScreen";
import UserProfile from "../profile/UserProfile";
import Logout from "./Logout";
import { BiHeart } from "react-icons/bi";





function HomeNav({setSearchModalDisplay}) {

    const { userTokenInfo, userLoggedInfo } = useContext(LoginContext)
 

    const [dropDownDisplay, setDropDownDisplay] = useState(false)

    const dropDownItems = [
        'Settings'   
    ]


 


    return (
        <>

            <nav className="z-[999]  " >

                {/* display logo and user photo  */}
                <NavTopSmallScreen />

                {/* main nav */}
                <div className="h-[60px] items-center bg-white   py-3 border border-gray-300 fixed bottom-0 left-0 z-[999] flex flex-row rounded-md justify-around md:h-[700px] md:w-[150px] md:flex-col md:left-0 md:bottom-[50%] md:translate-y-[50%] md:rounded-none md:py-16">

                    <ColoredLogo styles={'hidden md:block  '} size={'h-16'} />

                    <ul className="w-screen justify-evenly flex  items-center md:flex-col md:w-full md:h-[450px]">


						
                         <HomeNavLink target={'/newzcast'} linkTitle={'Trending'} >
                              <SlEnergy  />
                        </HomeNavLink>

                     
					   
			

						{
							userTokenInfo ? <HomeNavLink target={'/newzcast/favorites'} linkTitle={'Favorites'} >
                            <BiHeart  />
							</HomeNavLink> : null
						}
                        
						
                        <HomeNavLink target={'/newzcast/home'} linkTitle={'Home'} >
                            <IoHomeOutline  />
                        </HomeNavLink>


                        <button type='button' 
                        aria-label="Search"
                        className='font-sans w-full  flex justify-center items-center md:py-6  duration-200 text-gray-600 text-sm  hover:scale-125'
                         onClick={()=> setSearchModalDisplay('flex')} > 
						<FaSearch className="text-[20px]" />

						</button>


                        <div className="hidden md:block w-full">

                            {
                                !userTokenInfo || !userLoggedInfo ? <HomeNavLink target={'/authenticate'} linkTitle={'Log in'}>
                                    <CiLogin />
                                </HomeNavLink> : (

                                    <div className="flex justify-center items-center">
                                        <UserProfile name={userLoggedInfo['username'] } profileImage={userLoggedInfo['profileImage']} styles={'flex-row space-x-2 '}
                                            target={`profile/${userLoggedInfo['email']}`}
                                        />
                                        <ArrowBTN action={setDropDownDisplay}>
                                            <DropDown
                                                display={dropDownDisplay}
                                                setDropDownDisplay={setDropDownDisplay}
                                                items={dropDownItems}
												position='-top-4 left-6'
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