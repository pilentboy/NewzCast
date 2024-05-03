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
            <div className="w-lvw relative px-4 py-7 bg-white ">
                <ColoredLogo styles={'absolute left-10 top-2'} size={'h-16'} />
                <ul className="w-[480px] flex items-center justify-between mx-auto
                ">


                    <Link to={'trending'} className="text-purple-1000 text-sm border-b border-purple-1000 flex items-center py-2" >
                        <SlEnergy className="text-purple-1000 text-xl mx-1" />

                        Trending
                    </Link>

                    <HomeNavLink target={'favorites'} linkTitle={'Favorites'}>
                        <FaHeart />
                    </HomeNavLink>

                    <HomeNavLink target={'search'} linkTitle={'Search'}>
                        <GoSearch />
                    </HomeNavLink>

                    <HomeNavLink target={'profile'} linkTitle={'Username'} button={<IoIosArrowDown className="text-black cursor-pointer text-xl mx-1"
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