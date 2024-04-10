
export default function MainText({ text, styles }) {
    return (
        <>
            <h1 className={`font-bold leading-10 ${styles}`}>
                {text}
            </h1>
        </>
    )
}