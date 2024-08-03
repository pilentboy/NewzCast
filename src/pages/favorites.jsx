import { useContext, useEffect, useState } from "react"
import HomeContainer from "../components/home/HomeContainer"
import PostWrapper from "../components/post/post_cart/PostWrapper"
import { LoginContext } from '../context/LoginContext'

const Favorites = () => {
    
    const { userLoggedInfo, mainDB } = useContext(LoginContext)
    const [favorites,setFavorites]=useState([])

    const handleUsersFavoritePosts = () => {
        const userFavoritePosts = userLoggedInfo.favoritePosts

        const findFavoritePosts = mainDB.flatMap(user => 
            user.posts
                .filter(post => userFavoritePosts.includes(post.postID))
                .map(post => ({
                    username: user.username,
                    email: user.email,
                    profileImage: user.profileImage,
                    post
                }))
        )
        return findFavoritePosts
    }


    useEffect(()=>{
        setFavorites(handleUsersFavoritePosts())
    },[mainDB])


    return (
        <HomeContainer>
            {favorites.length > 0 ? favorites.map(favorite => (
                <PostWrapper
                    key={favorite.post.postID}
                    userName={favorite.username}
                    userEmail={favorite.email}
                    profileImg={favorite.profileImage}
                    userPostsInfo={favorite.post}
                />
            )) : <p>No favorite posts found</p>}
        </HomeContainer>
    )
}

export default Favorites
