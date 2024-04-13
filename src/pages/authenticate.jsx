import ColoredLogo from "../components/ColoredLogo"
import Container from "../components/authenticate/Container"
import RegisterLinkItems from "../components/authenticate/RegisterLinkItems"
import Wrapper from "../components/authenticate/Wrapper"
import Button from "../components/landing/Button"
import Slider from "../components/slider/Slider"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";

const Authenticate = () => {


    return (
        <>
            <Container>


                <Slider />


                <Wrapper styles={'bg-white flex flex-col px-20 lg:w-1/2  lg:justify-between '}>

                    <ColoredLogo />

                    <div className="flex flex-col space-y-2  ">
                        <Button
                            title={'Log In with Email'}
                            styles={'text-purple-1000 text-sm font-bold border border-gray-200  py-4   w-72   '}
                            target={'/login'} />

                        <Button
                            title={'Log In with Gmail'}
                            styles={'text-gray-500 text-sm font-normal   border border-gray-200  py-4 w-72 relative hover:text-gray-600 duration-200 '}
                            icon={<FcGoogle className="absolute text-lg right-6  traslate-y-[50%]" />}
                            target={'/'}
                            disabled={true}

                        />

                        <Button
                            title={'Log In with Facebook'}
                            styles={'text-gray-500 text-sm font-normal relative   border border-gray-200  py-4 w-72 flex-row-reverse hover:text-gray-600 duration-200 '}
                            icon={<FaFacebookF className="absolute  text-lg right-6 text-blue-500  traslate-y-[50%]" />}
                            target={'/'}
                            disabled={true}

                        />
                    </div>

                    <RegisterLinkItems buttonStyles={'bg-purple-1000 w-80'} />

                </Wrapper>
            </Container>
        </>
    )
}

export default Authenticate