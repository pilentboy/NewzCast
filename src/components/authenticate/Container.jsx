

export default function Container({ children }) {
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-between ">
            {children}
        </div>
    )
}