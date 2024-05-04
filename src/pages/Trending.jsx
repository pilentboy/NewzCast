import SharePost from '../components/post/share/SharePost'
import HomeContainer from '../components/home/HomeContainer'
import PostWrapper from '../components/post/post_cart/PostWrapper'
function Trending() {
    return (
        <HomeContainer>
            <SharePost />
            <PostWrapper />
            <PostWrapper />
            <PostWrapper />
            <PostWrapper />

        </HomeContainer>
    )
}

export default Trending