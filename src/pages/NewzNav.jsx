import HomeNav from "../components/home/HomeNav"
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import handleTokenExpiration from "../utils/handleTokenExpiration";
import Loading from "../components/Loading";

import { useEffect } from "react";

const NewzNav = () => {

    const { handleUserAuth, loading } = useContext(LoginContext)

    useEffect(() => {

        const interval = setInterval(() => handleTokenExpiration(handleUserAuth), 10000);

        return () => clearInterval(interval)
    }, []);

    return (

        <>
            <HomeNav />
            <Loading display={loading} />
        </>

    )
}

export default NewzNav