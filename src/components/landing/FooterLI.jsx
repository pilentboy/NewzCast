import { Link } from 'react-router-dom'

export default function FooterLI({ title, target }) {
    return (
        <li>
            <Link to={target}
                className='font-normal text-gray-500 hover:text-gray-600'>
                {title}
            </Link>
        </li>
    )
}