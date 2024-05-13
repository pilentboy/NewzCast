import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
import { useState, useContext } from 'react'
import { LoginContext } from '../context/LoginContext'
import postimg2 from '../assets/images/2.jpg'
import postimg3 from '../assets/images/3.jpg'


function Trending() {

    const [favorite, setFavorite] = useState(false)
    const [like, setLike] = useState(true)
    const [like2, setLike2] = useState(false)
    const [like3, setLike3] = useState(false)

    const { userInfo } = useContext(LoginContext)

    console.log(userInfo)

    return (

        <HomeContainer>

            {
                userInfo ? <SharePost /> : null
            }

            <PostWrapper img={postimg2} favorite={[favorite, setFavorite]} like={[like2, setLike2]} />

            <PostWrapper favorite={[favorite, setFavorite]} like={[like, setLike]} />
            <PostWrapper img={postimg3} favorite={[favorite, setFavorite]} like={[like3, setLike3]} />

        </HomeContainer>
    )
}

export default Trending