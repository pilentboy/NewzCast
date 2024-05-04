
export default function Wrapper({ styles, children }) {
    return (
        <div className={`w-screen min-h-screen py-2 relative flex items-center justify-around  ${styles}`}>
            {children}
        </div>
    )
}