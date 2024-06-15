export default function MediaBoxText({ title, styles }) {
    return (
        <>
            <span className={`font-medium  text-sm mt-3 ${styles}`}>
                {title}
            </span>
        </>
    )
}