import HomeContainer from "../components/home/HomeContainer"
import UserProfile from "../components/profile/UserProfile"
import pic from '../assets/images/userprof.jpg'
import ColoredLogo from "../components/ColoredLogo"
import UserID from "../components/profile/UserID"
import { IoIosInformationCircleOutline } from "react-icons/io";
import UserProfileActivityInfo from "../components/profile/UserProfileActivityInfo"
import postimg2 from '../assets/images/3.webp'
import PostWrapper from "../components/post/post_cart/PostWrapper"
import ChangeProfilePic from "../components/profile/ChangeProfilePic"
import { useState, useContext } from "react"
import { LoginContext } from "../context/LoginContext"
import ModalContainer from "../components/modal/ModalContainer"
import ProfileActivityList from "../components/modal/ProfileActivityList"
import { Outlet } from "react-router-dom"


const Profile = () => {

    const { userDBJsonInfo } = useContext(LoginContext)

    const [favorite, setFavorite] = useState(false)
    const [like2, setLike2] = useState(false)
    const [activityInfoClickedTitle, setActivityInfoClickedTitle] = useState(null)
    const [modalContainerDisplay, setModalContainerDisplay] = useState("hidden")




    return (
        <>
        {/* user's profile box -- some info about user */}
            <HomeContainer>

                {
                    userDBJsonInfo && <div className={`flex flex-col w-[90%] mb-6  ${userDBJsonInfo['verified'] ? 'h-[360px]' : 'h-[270px]'} py-3 border border-gray-200 rounded-md md:w-460 `}>

                        <div className="flex flex-col border-b border-gray-200 pb-10 ">
                            <div className="flex flex-col items-center relative">
                                <UserProfile profileImage={pic} target={' '} username={userDBJsonInfo['name']} styles={'flex-col space-y-2'} imageSize={'h-20 border-4 border-purple-1000 '} profileImageButton={<ChangeProfilePic />} userNameStyle={'text-purple-1000'} imgStyles={'relative'} />
                                <UserID id='pilentboy' />
                            </div>


                            {
                                userDBJsonInfo['verified'] && (
                                    <div className="flex justify-between items-center px-10 mt-3">
                                        <span></span>
                                        <ColoredLogo target={' '} />
                                        <IoIosInformationCircleOutline className='text-2xl text-purple-1000' />
                                    </div>
                                )


                            }



                        </div>

                        <ul className="py-2 px-8  flex justify-between items-start">

                            {
                                userDBJsonInfo['userActiviyInfo'].map((activity, id) => {
                                    return (
                                        <UserProfileActivityInfo
                                            title={activity.title}
                                            value={activity.value}
                                            action={activity.title !== 'Newz' && activity.title !== 'Videos' ? () => setModalContainerDisplay("flex") : null}
                                            setActivityInfoClickedTitle={setActivityInfoClickedTitle}
                                            key={id} />
                                    )
                                })

                            }
                        </ul>

                        <ModalContainer
                            display={modalContainerDisplay}
                            setDisplay={setModalContainerDisplay}>
                            <ProfileActivityList
                                title={activityInfoClickedTitle}
                                handleClose={setModalContainerDisplay}
                            />

                        </ModalContainer>
                    </div>

                }


                {/*  user's posts */}

                <PostWrapper img={postimg2} favorite={[favorite, setFavorite]} like={[like2, setLike2]} />

                <PostWrapper favorite={[favorite, setFavorite]} like={[like2, setLike2]} />
            </HomeContainer>

        </>

    )
}

export default Profile