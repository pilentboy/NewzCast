import Footer from "../components/landing/Footer"
import Header from "../components/landing/Header"
import Main from "../components/landing/Main"
import GetUsers from "../utils/GetUsers"

const Landing = () => {

    GetUsers()

    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    )
}

export default Landing