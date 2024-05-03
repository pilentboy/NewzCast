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

function HomeNav() {
    return (
        <>
            <div className=" py-2 px-2  fixed bottom-0 left-0 bg-white flex flex-col items-center w-lvw space-y-2 lg:block md:bottom-0 md:relative md:rounded-none md:py-7">

                <ColoredLogo styles={'hidden lg:absolute md:block lg:left-10 lg:top-4'} size={'h-16'} />

                <ul className="w-lvw justify-evenly flex items-center md:justify-between  mx-auto  md:w-[480px]
                ">


                    <Link to={'trending'} className="text-purple-1000 text-sm border-b border-purple-1000 flex items-center py-2" >
                        <SlEnergy className="text-purple-1000 text-xl mx-1" />

                        Trending
                    </Link>

                    <HomeNavLink target={'favorites'} styles={'hidden md:block'} linkTitle={'Favorites'}>
                        <FaHeart />
                    </HomeNavLink>

                    <HomeNavLink target={'search'} linkTitle={'Search'}>
                        <GoSearch />
                    </HomeNavLink>

                    <HomeNavLink target={'profile'} linkTitle={'Username'} button={<IoIosArrowDown className="text-black cursor-pointer hidden text-xl mx-1 md:block"
                        onClick={() => alert("profile")}
                    />}>
                        <ProfilePic src={UserPic} />
                    </HomeNavLink>
                </ul>
            </div>
            <Outlet />
        </>

    )
}

export default HomeNav