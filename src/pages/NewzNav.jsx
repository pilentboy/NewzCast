import HomeNav from "../components/home/HomeNav"
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import handleTokenExpiration from "../utils/handleTokenExpiration";

import { useEffect } from "react";

const NewzNav = () => {

    const { handleUserAuth } = useContext(LoginContext)

    useEffect(() => {

        const interval = setInterval(() => handleTokenExpiration(handleUserAuth), 10000);

        return () => clearInterval(interval)
    }, []);

    return (
        <>
            <HomeNav />
        </>
    )
}

export default NewzNav