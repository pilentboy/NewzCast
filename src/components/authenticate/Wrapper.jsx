
export default function Wrapper({ styles, children }) {
    return (
        <div className={`w-screen min-h-lvh py-2 relative flex items-center justify-around  ${styles}`}>
            {children}
        </div>
    )
}