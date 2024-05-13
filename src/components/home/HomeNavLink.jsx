import { Link } from "react-router-dom"
function HomeNavLink({ styles, children, target, linkTitle, button }) {
    return (
        <li className={`flex items-center text-gray-400 ${styles}`}>
            <Link to={target} className="text-gray-500 flex items-center font-sans text-sm hover:text-gray-600 duration-200" >
                <div className="mx-2">
                    {children}
                </div>
                {linkTitle}
            </Link>
            {button}
        </li>
    )
}

export default HomeNavLink