import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
import { useState, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import userPosts from '../db.json'


function Trending() {

    const [favorite, setFavorite] = useState(false)
    const [like, setLike] = useState(false)

    const { userInfo } = useContext(LoginContext)


    return (

        <HomeContainer>

            {
                userInfo && <SharePost />
            }

            {
                userPosts['UsersData'].map((post, id) => (
                    <PostWrapper userPostsInfo={post} favorite={[favorite, setFavorite]} like={[like, setLike]} key={id} />
                ))
            }






        </HomeContainer>
    )
}

export default Trending