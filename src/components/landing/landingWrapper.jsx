
export default function LandingWrapper({ children, styles }) {
    return (
        <div className={`flex flex-col   my-6 lg:my-0 lg:w-1/2 lg:px-14 space-y-6 ${styles}`} >
            {children}
        </div >
    )
}