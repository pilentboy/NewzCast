import Wrapper from "../components/authenticate/Wrapper"
import ColoredLogo from "../components/ColoredLogo"
import FormInput from "../components/form/FormInput"
import FormTitle from "../components/form/FormTitle"
import InputTitle from "../components/form/InputTitle"
import InputWrapper from "../components/form/InputWrapper"
import MainButton from '../components/landing/MainButton'
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx"
import { Link, useNavigate } from 'react-router-dom'
import RegisterLinkItems from "../components/authenticate/RegisterLinkItems"
import AcceptButton from "../components/form/AcceptButton"
import { useFormik } from "formik"
import { useState } from "react"
import handleLogIn from "../utils/HandleLogIn"
import Loading from '../components/Loading'

const Login = () => {

    const [staySignedIn, SetStatySignedIn] = useState(false)
    const [loginInputPassType, setLoginInputPassType] = useState('password')
    const [loginRes, setLoginRes] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const HandleLogin = useFormik({
        initialValues: {
            Email: '',
            Password: ''
        },
        onSubmit: async (values) => {
            setLoading(true)
            const res = await handleLogIn(values)
            if (res) {
                alert("logged in successfuly")
                setLoginRes(false)
                navigate("/")
            } else {
                setLoginRes(true)
            }
            setLoading(false)
        },

    })



    if (!loading) {
        return (

            <Wrapper styles={'w-screen  bg-white flex flex-col px-20'}>

                <div className="flex flex-col items-center space-y-4">

                    <ColoredLogo />

                    <form className="space-y-4 flex flex-col" onSubmit={HandleLogin.handleSubmit}>
                        <button onClick={notify} type="button">Notify!</button>

                        <FormTitle title={'Log in'} />

                        <InputWrapper
                            errorStyle={
                                loginRes ? true : false
                            }
                        >
                            <InputTitle title={'Email'} />
                            <FormInput type={'email'} value={HandleLogin.values.Email} name={'Email'} handleValue={HandleLogin.handleChange} />
                        </InputWrapper>

                        <InputWrapper
                            errorStyle={
                                loginRes ? true : false
                            }
                        >

                            <div className="flex flex-row justify-between items-center">

                                <InputTitle title={'Password'} />

                                <button className="text-gray-400" onClick={() => setLoginInputPassType(inputType => inputType === 'password' ? 'text' : 'password')} type='button'>
                                    {
                                        loginInputPassType === 'text' ? (
                                            <RxEyeOpen />
                                        ) : (<RxEyeClosed />)
                                    }
                                </button>
                            </div>

                            <FormInput type={loginInputPassType} value={HandleLogin.values.Password} name={'Password'} handleValue={HandleLogin.handleChange} />

                        </InputWrapper>

                        <div className="flex flex-row justify-between items-center w-72 py-2 ">

                            <Link to={'#'} className="text-xs font-bold underline text-purple-1000">
                                Forgot Password?
                            </Link>

                            <div className="flex flex-row items-center space-x-2">

                                <AcceptButton styles={'bg-gray-500'} ariaLabel={"stay signed in"} handleAcceptState={SetStatySignedIn} AcceptState={staySignedIn} type='button' />

                                <span className="font-bold text-xs  text-gray-400">
                                    Stay Sigened in
                                </span>
                            </div>

                        </div>

                        <MainButton title={'Log in'} type={'submit'} styles={'bg-purple-1000 py-3 text-sm'} lgBTN={true} />
                    </form>


                </div >

                <RegisterLinkItems buttonStyles={'border border-1  border-purple-1000 text-purple-1000 hover:bg-purple-1000 hover:text-white duration-200'} containerStlye={'mt-8 lg:mt-0'} />

            </Wrapper >
        )
    } else {
        return (
            <Loading display={loading} />
        )
    }

}


export default Login