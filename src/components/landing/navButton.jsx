
export default function NavButton({ styles, title, icon }) {
    console.log(icon)
    return (
        <button className={` flex items-center justify-center  rounded-sm   text-white font-medium text-center  ${styles}`}>
            {icon}
            {title}
        </button >
    )
}