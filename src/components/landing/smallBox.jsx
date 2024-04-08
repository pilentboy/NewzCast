export default function SmallBox({ children, styles }) {
    return (
        <>
            <div className={`flex flex-col items-center w-36 h-28  justify-center relative rounded-md ${styles}`}>
                {children}
            </div>
        </>
    )
}