import { Link } from 'react-router-dom'

export default function LandingFooterLI({ title, target }) {
    return (
        <li className=' list-none font-normal text-gray-500 text-md 	'>
            <Link to={target}>{title}</Link>
        </li>
    )
}