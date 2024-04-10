import ColoredLogo from "../components/ColoredLogo"
import Container from "../components/authenticate/Container"
import Wrapper from "../components/authenticate/Wrapper"
import Button from "../components/landing/Button"
import Slider from "../components/slider/Slider"


const Authenticate = () => {


    return (
        <>
            <Container>


                <Slider />


                <Wrapper styles={'bg-white flex flex-col px-20  lg:justify-between '}>

                    <ColoredLogo />

                    <div className="flex flex-col space-y-2 ">
                        <Button title={'Log In with Email'} styles={'text-purple-1000 text-sm font-bold border border-gray-200 w-64 py-4   w-72   '} target={'/'} />
                        <Button title={'Log In with Gmail'} styles={'text-gray-500 text-sm font-normal   border border-gray-200 w-64 py-4 w-72  hover:text-gray-600 duration-200 '} target={'/'} />
                        <Button title={'Log In with Facebook'} styles={'text-gray-500 text-sm font-normal   border border-gray-200 w-64 py-4 w-72 flex-row-reverse hover:text-gray-600 duration-200  '} target={'/'} />
                    </div>

                    <div className="flex flex-col items-center space-y-2 ">
                        <span className="text-sm font-medium text-gray-500 ">
                            Don’t have an account?
                        </span>
                        <Button title={'Register'} styles={'bg-purple-1000 py-3 w-80 text-sm '} />

                    </div>

                </Wrapper>
            </Container>
        </>
    )
}

export default Authenticate