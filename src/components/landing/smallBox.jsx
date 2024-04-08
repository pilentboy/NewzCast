export default function SmallBox({ children, styles }) {
    return (
        <>
            <div className={`flex flex-col items-center justify-center relative rounded-md ${styles}`}>
                {children}
            </div>
        </>
    )
}