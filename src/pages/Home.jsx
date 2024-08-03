import HomeContainer from "../components/home/HomeContainer"
import {useEffect, useContext, useState} from 'react'
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"
import PostWrapper from "../components/post/post_cart/PostWrapper"
import Loading from "../components/Loading"

const Home = () => {	
    
    const [userFollowing,setUserFollowing]=useState(null)
    const {userLoggedInfo, mainDB} = useContext(LoginContext)
    const [loading,setLoading]=useState(true)

	useEffect(()=>{
        setLoading(true)
        if(userLoggedInfo){
            const following=userLoggedInfo['userConnections'][1]['Following']
            if(following.length > 0){
                setUserFollowing(following)
            }else{
                setUserFollowing(false)
            }
        }
        setLoading(false)
		document.title = "Home"
	},[userLoggedInfo])



    if(loading) return <Loading loading={loading} />
    if(!userLoggedInfo) {
        return <HomeContainer>
                    <span className="border-b border-gray-400 mt-10">Please <Link to={'/authenticate'} className="font-bold text-black">Log in</Link> to see your following news</span>
            </HomeContainer>
    }
    if(userFollowing){
        return <HomeContainer>
            {
                userFollowing.map(following => (
                        mainDB.map(user => (
                            user.username === following ? (
                                user.posts.map(post => (
                                    <PostWrapper key={post.postID} userPostsInfo={post} userEmail={user.email} userName={user.username} profileImg={user.profileImage} />
                                ))
                            ) : null
                        ))
                    ) )
            }
        </HomeContainer>
        
    }else{
        return  <HomeContainer>
              <span className="border-b border-gray-400 mt-10">You Have No Following</span>
                </HomeContainer>
            }


}

export default Home