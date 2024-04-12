import Wrapper from "../components/authenticate/Wrapper"
import ColoredLogo from "../components/ColoredLogo"
import FormInput from "../components/form/FormInput"
import FormTitle from "../components/form/FormTitle"
import InputTitle from "../components/form/InputTitle"
import InputWrapper from "../components/form/InputWrapper"
import Button from "../components/landing/Button"
import { MdDone } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx"
import { Link } from 'react-router-dom'
import { useState } from "react"
import RegisterLinkItems from "../components/authenticate/RegisterLinkItems"

const Login = () => {

    const [staySignedIn, SetStatySignedIn] = useState(false)
    const [loginInputPassType, setLoginInputPassType] = useState('password')


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

                    <div className="flex flex-row justify-between items-center">
                        <InputTitle title={'Password'} />
                        <button className="text-gray-400" onClick={() => setLoginInputPassType( inputType => inputType === 'password' ? 'text' : 'password')} >
                            {
                                loginInputPassType === 'text' ? (
                                    <RxEyeOpen />
                                ) : (<RxEyeClosed />)
                            }
                        </button>
                    </div>
                    <FormInput type={loginInputPassType} />
                </InputWrapper>

                <div className="flex flex-row justify-between items-center w-72">

                    <Link to={'#'} className="text-xs font-bold underline text-purple-1000">
                        Forgot Password?
                    </Link>

                    <div className="flex flex-row items-center space-x-2">

                        <button className=' rounded-full bg-gray-500 text-xs   text-white w-4 h-4  text-center ' aria-label="stay signed in" onClick={() => SetStatySignedIn(!staySignedIn)}>
                            {
                                staySignedIn ? (<MdDone className="mx-auto" />
                                ) : (
                                    <RxCross1 className="mx-auto" />
                                )
                            }
                        </button>
                        <span className="font-bold text-xs  text-gray-400">
                            Stay Sigened in
                        </span>
                    </div>

                </div>

                <Button title={'Log in'} styles={'bg-purple-1000 py-3 w-72 text-sm'} />

            </div>

            <RegisterLinkItems buttonStyles={'border border-1  border-purple-1000 text-purple-1000 w-72'} containerStlye={'mt-8 lg:mt-0'} />

        </Wrapper>

    )
}

export default Login