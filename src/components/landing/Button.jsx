import { useNavigate } from "react-router-dom"

export default function Button({ styles, title, icon, target }) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(target)
    }
    console.log(icon)
    return (
        <button className={` flex items-center justify-center  rounded-md  text-center  ${styles}`} onClick={handleNavigate}>
            {icon}
            {title}
        </button >
    )
}