
export default function NavButton({ styles, title, }) {
    return (
        <button className={`w-28 h-10  rounded-sm   text-white font-medium text-center  ${styles}`}>
            {title}
        </button >
    )
}