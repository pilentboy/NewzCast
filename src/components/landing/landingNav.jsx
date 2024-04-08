import Logo from "./logo"
import LandingButton from "./landingButton"

export default function LandingNav() {
    return (
        <nav>
            <div className="flex flex-col  justify-between items-center w-[80%] h-14  mx-auto md:flex-row   ">

                <Logo />

                <div className="flex space-x-6">
                    <LandingButton title={'Log in'} styles={'bg-transparent border border-1  border-white  w-28 h-9'} />
                    <LandingButton title={'Sign Up'} styles={'bg-[#FF9A00] w-28 h-9 '} />
                </div>

            </div>
        </nav>
    )
}