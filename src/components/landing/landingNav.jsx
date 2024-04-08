import Logo from "./logo"
import NavButton from "./navButton"

export default function LandingNav() {
    return (
        <nav>
            <div className="flex justify-between items-center w-[80%] h-14  mx-auto   ">

                <Logo />

                <div className="flex space-x-6">
                    <NavButton title={'Log in'} styles={'bg-transparent border border-1  border-white  '} />
                    <NavButton title={'Sign Up'} styles={'bg-[#FF9A00]'} />
                </div>

            </div>
        </nav>
    )
}