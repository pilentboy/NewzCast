import HomeContainer from "../components/home/HomeContainer"
import {useEffect, useContext, useState} from 'react'
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
import PostWrapper from "../components/post/post_cart/PostWrapper"

const Home = () => {	
    
    const [userFollowers,setUserFollowers]=useState(null)
    const {userLoggedInfo, mainDB} = useContext(LoginContext)


	useEffect(()=>{
        if(userLoggedInfo){
            const followers=userLoggedInfo['userConnections'][0]['Followers']
            if(followers.length > 0){
                setUserFollowers(followers)
            }else{
                setUserFollowers(null)
            }
        }
		document.title = "Home"
	},[userLoggedInfo])

    return (
        <HomeContainer>
            {
                
                userLoggedInfo && userFollowers ? (
                    userFollowers.map(follower => (
                        mainDB.map(user => (
                            user.username === follower ? (
                                user.posts.map(post => (
                                    <PostWrapper key={post.postID} userPostsInfo={post} userEmail={user.email} userName={user.username} profileImg={user.profileImage} />
                                ))
                            ) : null
                        ))
                    )
                    )
                )

                : <span className="border-b border-gray-400 mt-10">Please <Link to={'/authenticate'} className="font-bold text-black">Log in</Link> to see your followers news</span>
            }
        </HomeContainer>
    )
}

export default Home