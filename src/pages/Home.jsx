import HomeContainer from "../components/home/HomeContainer"
import {useEffect, useContext} from 'react'
import { Link } from "react-router-dom"
import { LoginContext } from "../context/LoginContext"

const Home = () => {	
   
    const {userLoggedInfo} = useContext(LoginContext)

	useEffect(()=>{
		document.title = "Home"
	},[])

    return (
        <HomeContainer>
            {
                userLoggedInfo ? <span>posts</span> : <span className="border-b border-gray-400 ">Please <Link to={'/authenticate'} className="font-bold text-black">Log in</Link> to see your followers news</span>
            }
        </HomeContainer>
    )
}

export default Home