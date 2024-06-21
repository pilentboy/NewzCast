import HomeContainer from "../components/home/HomeContainer"
import UserProfile from "../components/profile/UserProfile"
import UserID from "../components/profile/UserID"
import { Link } from "react-router-dom";
import UserConnectionActiviyInfo from "../components/profile/UserConnectionActiviyInfo"
import PostWrapper from "../components/post/post_cart/PostWrapper"
import ChangeProfilePic from "../components/profile/ChangeProfilePic"
import Verify from "../components/verify/Verify";
import InfoBox from "../components/verify/InfoBox";
import { useState, useContext, useEffect  } from "react"
import { LoginContext } from "../context/LoginContext"
import ModalContainer from "../components/modal/ModalContainer"
import { useParams } from "react-router-dom";
import UserConnectiosList from "../components/modal/UserConnectiosList"
import NotFoundProfile from "../components/profile/NotFoundProfile";
import { IoIosSettings } from "react-icons/io";
import ConnectionBTN from "../components/profile/ConnectionBTN";


const Profile = () => {

    const { userLoggedInfo, getUserInfo} = useContext(LoginContext)


    const [activityInfoClickedTitle, setActivityInfoClickedTitle] = useState(null)
    const [modalContainerDisplay, setModalContainerDisplay] = useState("hidden")
    const [userPer, setUserPer] = useState(false) // handle access to profile settings
    const [userProfileInfo, setUserProfileInfo] = useState(undefined)
    const [loading, setLoading] = useState(true)
    const [userConnecton,setUserConnection]=useState(false)

    const { email } = useParams();
	
    useEffect(() => {
        setLoading(true)
        if (userLoggedInfo && email === userLoggedInfo['email']) {
            setUserProfileInfo(userLoggedInfo)
            setUserPer(true)
        } else {
            setUserProfileInfo(getUserInfo(email))
            setUserPer(false)
        }
        setLoading(false)

    }, [userLoggedInfo, email, userProfileInfo])
	
	
	useEffect(()=>{
		document.title = "Profile"
	},[])


    return (

        !loading && <HomeContainer>

            {
                userProfileInfo ? (
                    <>
                        <div className={`flex flex-col w-[90%] mb-6   ${userProfileInfo['verified'] ? 'min-h-[330px]' : 'h-[320px]'} pt-2 border border-gray-200 rounded-md md:w-460 `}>

                            <div className="flex flex-col border-b border-gray-200 pb-10 relative">

                                {
                                    userPer &&
                                    <Link to="/newzcast/settings" className="block md:hidden">
                                        <IoIosSettings className="text-black absolute top-2 cursor-pointer left-5 text-lg hover:rotate-45 duration-200" />
                                    </Link>

                                }

                                <div className="flex flex-col mx-auto items-center">

                                    <UserProfile profileImage={userProfileInfo['profileImage']} target={' '} name={`${userProfileInfo['firstName']} ${userProfileInfo['lastName']} `} styles={'flex-col space-y-2'} imageSize={'h-20 w-20 border-4 border-purple-1000 '} profileImageButton={userPer ? <ChangeProfilePic /> : null} userNameStyle={'text-purple-1000'} />
                                    <UserID id={userProfileInfo['username']} />
                                </div>


                                {
                                    userProfileInfo['verified'] && (
                                   

                                        <Verify 
                                        Cborder='border-none'
                                        icon={<InfoBox 
                                            title='Verified Account'
                                            textContent=' This user is a trusted member of our community. Verified users enjoy enhanced security and exclusive features.'
                                            />} />
                                    )


                                }



                            </div>

                            <div className="pt-2 px-8 flex flex-col">
                                <ul className="  flex justify-between items-start">

                                    {
                                        userProfileInfo['userActiviyInfo'].map((activity, id) => {
                                            return (
                                                <UserConnectionActiviyInfo
                                                    title={activity.title}
                                                    value={activity.value}
                                                    action={activity.title !== 'Newz' && activity.title !== 'Videos' ? () => setModalContainerDisplay("flex") : null}
                                                    setActivityInfoClickedTitle={setActivityInfoClickedTitle}
                                                    key={id} />
                                            )
                                        })

                                    }
                                </ul>
                                {/* display follow btns */}
                                {
                                    !userPer && <ConnectionBTN/>
                                }
                            </div>

                            <ModalContainer
                                display={modalContainerDisplay}
                                setDisplay={setModalContainerDisplay}>
                                <UserConnectiosList
                                    title={activityInfoClickedTitle}
                                />

                            </ModalContainer>


                        </div>

                        {/* user's posts  */}
                        {
                            userProfileInfo['posts'].length >=1 ? 
                             userProfileInfo['posts'].map((post,id) => (
                                <PostWrapper
                                    userPostsInfo={post}
                                    userEmail={email}
                                    userName={userProfileInfo.username}
                                    profileImg={userProfileInfo.profileImage}
                                    key={id}
                            />
                            )) : <h1 className=" border-b border-gray-500 text-gray-700 ">No Post</h1>
                        }
                    
                    

                    </>

                ) : (
                    <NotFoundProfile />
                )


            }

        </HomeContainer >



    )
}

export default Profile