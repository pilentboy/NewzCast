import Footer from "../components/landing/Footer"
import Header from "../components/landing/Header"
import Main from "../components/landing/Main"
import { useEffect } from "react"
import app from "../firebase-config/config"
const Landing = () => {
    useEffect(() => {
        console.log(app, 'firebase')
    }, [])
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default Landing