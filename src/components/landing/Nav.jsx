import Logo from "./logo"
import NavAuthLinks from "./NavAuthLinks"


export default function Nav() {
    return (
        <nav>
            <div className="flex flex-col space-y-6 justify-between items-center  h-14  mx-auto md:flex-row  md:space-y-0 ">

                <Logo />

                <NavAuthLinks />

            </div>
        </nav>
    )
}