import HomeContainer from "../components/home/HomeContainer"
import UserProfile from "../components/profile/UserProfile"
import ColoredLogo from "../components/ColoredLogo"
import UserID from "../components/profile/UserID"
import { IoIosInformationCircleOutline } from "react-icons/io";
import UserProfileActivityInfo from "../components/profile/UserProfileActivityInfo"
import PostWrapper from "../components/post/post_cart/PostWrapper"
import ChangeProfilePic from "../components/profile/ChangeProfilePic"
import { useState, useContext, useEffect } from "react"
import { LoginContext } from "../context/LoginContext"
import ModalContainer from "../components/modal/ModalContainer"
import { useParams } from "react-router-dom";
import ProfileActivityList from "../components/modal/ProfileActivityList"
import MainButton from "../components/landing/MainButton";


const Profile = () => {

    const { userDBJsonInfo } = useContext(LoginContext)

    const [favorite, setFavorite] = useState(false)
    const [like2, setLike2] = useState(false)
    const [activityInfoClickedTitle, setActivityInfoClickedTitle] = useState(null)
    const [modalContainerDisplay, setModalContainerDisplay] = useState("hidden")
    const [userPer, setUserPer] = useState(false)



    const { email } = useParams();

    // just checking the user's email in Profile page
    useEffect(() => {
        if (userDBJsonInfo) {
            if (email === userDBJsonInfo['email']) {
                console.log("owner the page")
                setUserPer(true)
            } else {
                console.log("not owner the page")
                setUserPer(false)
            }
        }


    }, [userDBJsonInfo, email])

    return (
        <>
            {/* user's profile box -- some info about user */}
            <HomeContainer>

                {
                    userDBJsonInfo && <div className={`flex flex-col w-[90%] mb-6  ${userDBJsonInfo['verified'] ? 'min-h-[360px]' : 'h-[270px]'} pt-2 border border-gray-200 rounded-md md:w-460 `}>

                        <div className="flex flex-col border-b border-gray-200 pb-10 ">

                            <div className="flex flex-col mx-auto items-center relative">
                                <UserProfile profileImage={userDBJsonInfo['profileImage']} target={' '} name={`${userDBJsonInfo['firstName']} ${userDBJsonInfo['lastName']} `} styles={'flex-col space-y-2'} imageSize={'h-20 w-20 border-4 border-purple-1000 '} profileImageButton={userPer ? <ChangeProfilePic /> : null} userNameStyle={'text-purple-1000'} imgStyles={'relative'} />
                                <UserID id={userDBJsonInfo['username']} />
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

                        <div className="pt-2 px-8 flex flex-col">
                            <ul className="  flex justify-between items-start">

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
                            {
                                !userPer && <MainButton
                                    title={'Follow'}
                                    styles={'bg-purple-1000 text-white font-normal py-1 mx-auto mt-5 mb-3'}
                                    lgBTN={false}
                                    action={() => alert("following")}
                                />
                            }
                        </div>

                        <ModalContainer
                            display={modalContainerDisplay}
                            setDisplay={setModalContainerDisplay}>
                            <ProfileActivityList
                                title={activityInfoClickedTitle}
                                handleClose={setModalContainerDisplay}
                            />

                        </ModalContainer>
                    </div>


                    /*  user's posts */

                }

                {
                    userDBJsonInfo &&
                    <PostWrapper
                        userPostsInfo={userDBJsonInfo}
                        favorite={[favorite, setFavorite]}
                        like={[like2, setLike2]}
                    />


                }



            </HomeContainer>

        </>

    )
}

export default Profile