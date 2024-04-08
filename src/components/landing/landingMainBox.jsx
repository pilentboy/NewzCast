export default function LandingMainBox({ children }) {
    return (
        <>
            <div className="w-[320px] h-[200px] border border-1 border-gray-200 rounded-md flex flex-col justify-between p-4 ">
                {children}
            </div>
        </>
    )
}