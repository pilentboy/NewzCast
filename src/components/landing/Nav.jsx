import Logo from "./logo"
import Button from "./Button"


export default function Nav() {
    return (
        <nav>
            <div className="flex flex-col space-y-6 justify-between items-center w-[80%] h-14  mx-auto md:flex-row  md:space-y-0 ">

                <Logo />

                <div className="flex space-x-6">
                    <Button title={'Log in'} target={'authenticate'} styles={'bg-transparent border border-1  border-white  w-28 h-9'} />
                    <Button title={'Sign Up'} target={'/register'} styles={'bg-[#FF9A00] w-28 h-9 '} />
                </div>

            </div>
        </nav>
    )
}