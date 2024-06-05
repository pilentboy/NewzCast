import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
import {useEffect, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'


function Trending() {

 
    const { userLoggedInfo, mainDB, verifyUser } = useContext(LoginContext)
	useEffect(()=>{
		document.title = "Trending"
	},[])



    return (

        <HomeContainer>

            {
                userLoggedInfo && <SharePost TextLimit={verifyUser} />
            }

            {
                mainDB.map((post, id) => (
                    <PostWrapper userPostsInfo={post}  key={id} />
                ))
            }


        </HomeContainer>


    )
}

export default Trending