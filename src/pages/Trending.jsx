import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
import {useEffect, useContext, useState } from 'react'
import { LoginContext } from '../context/LoginContext'
import userPosts from '../db.json'


function Trending() {

 
    const { userLoggedInfo, verifyUser } = useContext(LoginContext)
	useEffect(()=>{
		document.title = "Trending"
	},[])



    return (

        <HomeContainer>

            {
                userLoggedInfo && <SharePost TextLimit={verifyUser} />
            }

            {
                userPosts['UsersData'].map((post, id) => (
                    <PostWrapper userPostsInfo={post}  key={id} />
                ))
            }


        </HomeContainer>


    )
}

export default Trending