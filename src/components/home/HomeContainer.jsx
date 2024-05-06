
function HomeContainer({ children }) {
    return (
        <div className="w-screen min-h-lvh flex flex-col items-center pt-2 pb-16  mx-auto bg-white  md:pb-2">
            {children}
        </div>
    )
}

export default HomeContainer