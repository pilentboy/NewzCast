import { Link } from "react-router-dom"

export default function MainLink({ styles, lgBTN, title, icon, target }) {

    return (
        <Link to={target} className={` flex items-center justify-center  rounded-md  text-center  ${lgBTN ? 'w-72' : null} ${styles}`}>
            {icon}
            {title}
        </Link >
    )
}