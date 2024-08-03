import { NavLink } from "react-router-dom"
function HomeNavLink({ styles, children, target, linkTitle, button, size }) {
    return (
        <li className={`flex items-center justify-center md:py-6 ${size ? size : 'w-full'}  hover:md:bg-gray-100 duration-200  ${styles}`}>
            <NavLink to={target} 
			className={({ isActive, isPending }) =>
					 `flex flex-col items-center justify-center ${size ? size : 'w-full'}  font-sans  text-sm hover:text-gray-600 ${
					isActive && target === '/newzcast/favorites' ? 'text-red-600' : isActive ? 'text-purple-1000' : isPending ? 'text-gray-600' : 'text-gray-600'}`} >
                <div className="mx-2 text-[24px]">
                    {children}
                </div>
                <span className="text-gray-500 font-normal text-sm">{linkTitle}</span>
            </NavLink>
            {button}
        </li>
    )
}

export default HomeNavLink

