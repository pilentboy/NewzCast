import Footer from "../components/landing/Footer"
import Header from "../components/landing/Header"
import Main from "../components/landing/Main"
import {useEffect} from 'react'

const Landing = () => {
	useEffect(()=>{
		document.title = "Newzcast"
	},[])

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default Landing