
export default function Wrapper({ styles, children }) {
    return (
        <div className={`w-screen h-lvh  items-center  py-6   justify-around  lg:w-1/2   ${styles}`}>
            {children}
        </div>
    )
}