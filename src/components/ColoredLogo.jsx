import Logo from '../assets/images/NewzKast new Final Truly Verified-01.png'
import { Link } from 'react-router-dom'

export default function ColoredLogo() {
    return (
        <Link to={'/'}>
            <img src={Logo} className='w-[150px]' />
        </Link>
    )
}