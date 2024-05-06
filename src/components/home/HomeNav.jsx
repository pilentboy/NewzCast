import ColoredLogo from "../ColoredLogo"
import { Outlet } from "react-router-dom"
import { Link } from "react-router-dom"
import HomeNavLink from "./HomeNavLink"
import { FaHeart } from "react-icons/fa6";
import { SlEnergy } from "react-icons/sl";
import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import ProfilePic from "../profile/ProfilePic";
import UserPic from '../../assets/images/userprof.jpg'
import { useContext } from "react";
import { LoginContext } from "../../context/LoginContext";
import { CiLogin } from "react-icons/ci";

function HomeNav() {


    const { userInfo } = useContext(LoginContext)

    return (
        <>

            <div className="w-full  py-2 px-2  fixed bottom-0 left-0  flex flex-col items-center space-y-2  bg-white border-t  border-gray-100  lg:block md:bottom-0 md:border-b md:relative md:rounded-none md:py-7">

                <ColoredLogo styles={'hidden lg:absolute md:block lg:left-10 lg:top-4'} size={'h-16'} />

                <ul className="w-lvw justify-evenly flex items-center md:justify-between  mx-auto  md:w-480
                ">


                    <Link to={'/newzcast'} className="text-purple-1000 text-sm border-b border-purple-1000 flex items-center py-2" >
                        <SlEnergy className="text-purple-1000  text-xl mx-1" />

                        Trending
                    </Link>

                    <HomeNavLink target={'favorites'} styles={'hidden md:block'} linkTitle={'Favorites'}>
                        <FaHeart />
                    </HomeNavLink>

                    <HomeNavLink target={'search'} linkTitle={'Search'}>
                        <GoSearch />
                    </HomeNavLink>

                    {
                        userInfo.length == 0 ? <HomeNavLink target={'/authenticate'} linkTitle={'Login'}>
                            <CiLogin />
                        </HomeNavLink> : (

                            <HomeNavLink target={'profile'} linkTitle={'Username'} button={<IoIosArrowDown className="text-black cursor-pointer hidden duration-200 hover:mt-2 text-xl mx-1 md:block"
                                onClick={() => alert("profile")}
                            />}>
                                <ProfilePic src={UserPic} />
                            </HomeNavLink>
                        )
                    }
                </ul>
            </div>
            <Outlet />

        </>


    )
}

export default HomeNav