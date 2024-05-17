import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
import { useState, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import userPosts from '../db.json'


function Trending() {

    const [favorite, setFavorite] = useState(false)
    const [like, setLike] = useState(true)
    const [like2, setLike2] = useState(false)
    const [like3, setLike3] = useState(false)

    const { userInfo, userDBJsonInfo } = useContext(LoginContext)

    console.log(userInfo)

    return (

        <HomeContainer>

            {
                userInfo && <SharePost />
            }


          



        </HomeContainer>
    )
}

export default Trending