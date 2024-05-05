import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'

import postimg1 from '../assets/images/1.jpg'
import postimg2 from '../assets/images/2.jpg'
import postimg3 from '../assets/images/3.jpg'

function Trending() {
    return (
        <HomeContainer>
            <SharePost />
            <PostWrapper img={postimg1} />
            <PostWrapper img={postimg2} />
            <PostWrapper img={postimg3} />


        </HomeContainer>
    )
}

export default Trending