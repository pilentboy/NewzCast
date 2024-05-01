import ColoredLogo from "../ColoredLogo"
import { Outlet } from "react-router-dom"

function HomeNav() {
    return (
        <>
            <div className="w-lvw relative px-4 py-10 bg-white ">
                <ColoredLogo styles={'absolute left-10 top-2'} size={'h-16'} />

            </div>
            <Outlet />
        </>

    )
}

export default HomeNav