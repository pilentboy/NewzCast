
export default function MainText({ text, styles }) {
    return (
        <>
            <h1 className={`text-3xl font-bold leading-10 ${styles}`}>
                {text}
            </h1>
        </>
    )
}