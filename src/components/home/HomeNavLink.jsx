import { Link } from "react-router-dom"
function HomeNavLink({ children, target, linkTitle, button }) {
    return (
        <li className=' flex items-center text-gray-400'>
            <Link to={target} className="text-gray-400 flex items-center font-sans text-sm" >
                <div className="mx-2 text-lg">
                    {children}
                </div>
                {linkTitle}
            </Link>
            {button}
        </li>
    )
}

export default HomeNavLink