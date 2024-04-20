import Footer from "../components/landing/Footer"
import Header from "../components/landing/Header"
import Main from "../components/landing/Main"
import { useEffect } from "react"
import db from "../firebase-config/config"
import { collection, getDocs } from "firebase/firestore";


const Landing = () => {

    const getNewzCastUsers = async () => {
        const querySnapshot = await getDocs(collection(db, 'NewzUsers'));
        querySnapshot.forEach((doc) => {
        
            console.log(`${doc.id} => ${doc.data()}`);
        });

    }
    useEffect(() => {
    
       getNewzCastUsers()
    
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