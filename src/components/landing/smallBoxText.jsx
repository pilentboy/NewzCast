export default function SmallBoxText({ title, styles }) {
    return (
        <>
            <span className={`font-medium  text-sm mt-3 ${styles}`}>
                {title}
            </span>
        </>
    )
}