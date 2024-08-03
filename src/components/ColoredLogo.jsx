import Logo from '../assets/images/NewzKast new Final Truly Verified-01.png'
import { Link } from 'react-router-dom'

export default function ColoredLogo({ styles, target, size }) {
    return (
        <Link to={!target ? '/' : target} className={`${styles}`}>
            <img src={Logo} className={`${size ? size : null}`} alt='website logo' />
        </Link>
    )
}