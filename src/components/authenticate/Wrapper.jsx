
export default function Wrapper({ styles, children }) {
    return (
        <div className={` w-screen lg:w-1/2 h-lvh flex items-center justify-around lg:justify-between px-20  py-6   ${styles}`}>
            {children}
        </div>
    )
}