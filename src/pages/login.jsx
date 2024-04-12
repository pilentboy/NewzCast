import Wrapper from "../components/authenticate/Wrapper"
import ColoredLogo from "../components/ColoredLogo"
import FormInput from "../components/form/FormInput"
import FormTitle from "../components/form/FormTitle"
import InputTitle from "../components/form/InputTitle"
import InputWrapper from "../components/form/InputWrapper"
import Button from "../components/landing/Button"
import { Link } from 'react-router-dom'
const Login = () => {

    return (

        <Wrapper styles={'w-screen bg-white flex flex-col px-20 '}>
            <div className="flex flex-col items-center space-y-4">
                <ColoredLogo />

                <FormTitle title={'Log in'} />

                <InputWrapper>
                    <InputTitle title={'Email'} />
                    <FormInput type={'email'} />
                </InputWrapper>
                <InputWrapper>
                    <InputTitle title={'Password'} />
                    <FormInput type={'password'} />
                </InputWrapper>

                <div className="flex flex-row justify-between items-center w-72">
                    <Link to={'#'} className="text-md font-bold underline text-purple-1000">
                        Forgot Password?
                    </Link>
                </div>
                <Button title={'Log in'} styles={'bg-purple-1000 py-3 w-72 text-sm '} />

            </div>

        </Wrapper>

    )
}

export default Login