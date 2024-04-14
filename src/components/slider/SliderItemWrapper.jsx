
export default function SliderItemWrapper({ children }) {
    return (
        <div className="flex flex-col items-center space-y-4 slide-anima">
            {children}
        </div>
    )
}