import { useNavigate } from "react-router-dom"

export default function Button({ styles, title, icon, target, disabled }) {
    const navigate = useNavigate()

    const handleNavigate = () => {
        navigate(target)
    }
    console.log(icon)
    return (
        <button disabled={disabled} className={` flex items-center justify-center  rounded-md  text-center  ${styles}`} onClick={handleNavigate}>
            {icon}
            {title}
        </button >
    )
}