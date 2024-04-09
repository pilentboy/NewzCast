
export default function Button({ styles, title, icon }) {
    console.log(icon)
    return (
        <button className={` flex items-center justify-center  rounded-md   text-white font-medium text-center  ${styles}`}>
            {icon}
            {title}
        </button >
    )
}