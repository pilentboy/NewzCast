import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
import {useEffect, useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'


function Trending() {

 
    const { userLoggedInfo, mainDB, verifyUser } = useContext(LoginContext)


    const x=()=>{
        mainDB.forEach((e,index) => {
            e.posts.map((post,id) => (
                <PostWrapper userPostsInfo={post} key={id}  />
            ))
        })
    }

	useEffect(()=>{
		document.title = "Trending"
	},[])



    return (
        <HomeContainer>
            {userLoggedInfo && <SharePost TextLimit={verifyUser} />}
            {
                mainDB.map((user, userIndex) => (
                    user.posts.map((post, postIndex) => (
                        <PostWrapper userPostsInfo={post} userName={user.username} profileImg={user.profileImage} userEmail={user.email} key={`${userIndex}-${postIndex}`} />
                    ))
                ))
            }
        </HomeContainer>
    );
}

export default Trending