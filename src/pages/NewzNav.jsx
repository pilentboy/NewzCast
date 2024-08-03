import HomeNav from "../components/home/HomeNav"
import { useContext, useState } from "react";
import { LoginContext } from "../context/LoginContext";
import handleTokenExpiration from "../utils/handleTokenExpiration";
import Loading from "../components/Loading";
import Search from "../components/modal/Search";
import ModalContainer from '../components/modal/ModalContainer'

import { useEffect } from "react";

const NewzNav = () => {

    const { handleUserAuth, loading } = useContext(LoginContext)
    const [searchModalDisplay,setSearchModalDisplay]=useState('hidden')

    useEffect(() => {

        const interval = setInterval(() => handleTokenExpiration(handleUserAuth), 10000);

        return () => clearInterval(interval)
    }, []);

    return (

        <>
            <HomeNav setSearchModalDisplay={setSearchModalDisplay} />
            <ModalContainer display={searchModalDisplay} setDisplay={setSearchModalDisplay}>
                <Search setSearchModalDisplay={setSearchModalDisplay}/>
            </ModalContainer>
            <Loading display={loading} />
        </>

    )
}

export default NewzNav