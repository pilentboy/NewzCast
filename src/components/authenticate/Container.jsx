

export default function Container({ children }) {
    return (
        <div className="w-screen  h-lvh flex flex-row items-center justify-between ">
            {children}
        </div>
    )
}