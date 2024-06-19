import { Link } from "react-router-dom"

export default function GetStartedBTN({styles,hover}) {
    return (
		 <Link to={'newzcast'} className={`w-28 py-2  bg-purple-1000  rounded-md animate__animated animate__flash text-center ${hover? 'hover:ms-6' : null} duration-500 ${styles}`}>
			Get Started
        </Link >
    )
}