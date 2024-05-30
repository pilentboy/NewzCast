import HomeContainer from "../components/home/HomeContainer"
import {useEffect} from 'react'

const Home = () => {	

	useEffect(()=>{
		document.title = "Home"
	},[])

    return (
        <HomeContainer>
            <h1>Home</h1>
        </HomeContainer>
    )
}

export default Home