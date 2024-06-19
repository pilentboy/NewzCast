import { NavLink } from "react-router-dom"
function HomeNavLink({ styles, children, target, linkTitle, button }) {
    return (
        <li className={`flex items-center  ${styles}`}>
            <NavLink to={target} 
			className={({ isActive, isPending }) =>
					 `flex items-center font-sans text-sm hover:text-gray-600 ${
					isActive ? 'text-purple-1000' : isPending ? 'text-gray-600' : 'text-gray-600'}`} >
                <div className="mx-2 text-[24px]">
                    {children}
                </div>
                {linkTitle}
            </NavLink>
            {button}
        </li>
    )
}

export default HomeNavLink

