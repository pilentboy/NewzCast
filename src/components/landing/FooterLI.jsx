import { Link } from 'react-router-dom'

export default function FooterLI({ title, target }) {
    return (
        <li className=' list-none font-normal text-gray-500 text-md hover:text-gray-600 	'>
            <Link to={target}>{title}</Link>
        </li>
    )
}