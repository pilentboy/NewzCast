
export default function Wrapper({ styles, children }) {
    return (
        <div className={`w-screen h-lvh max-h-[800px] relative  items-center  py-6   justify-around   ${styles}`}>
            {children}
        </div>
    )
}