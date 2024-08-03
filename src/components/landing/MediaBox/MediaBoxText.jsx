export default function MediaBoxText({ title, styles }) {
    return (
        <>
            <span className={`font-medium text-center  mt-3 ${styles ? styles : 'text-sm'}`}>
                {title}
            </span>
        </>
    )
}