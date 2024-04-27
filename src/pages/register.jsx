import Wrapper from '../components/authenticate/Wrapper'
import ColoredLogo from '../components/ColoredLogo'
import FormTitle from '../components/form/FormTitle'
import InputWrapper from '../components/form/InputWrapper'
import FormInput from '../components/form/FormInput'
import InputTitle from '../components/form/InputTitle'
import MainButton from '../components/landing/MainButton'
import AcceptButton from '../components/form/AcceptButton'
import TermsOfUse from '../components/authenticate/TermsOfUse'
import ModalBox from '../components/modal/ModalBox'
import ModalContainer from '../components/modal/ModalContainer'
import { useState } from 'react'
import { useFormik } from 'formik'
import handleSignUp from '../utils/handleSignUp'
import Loading from '../components/Loading'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import AlertModal from '../components/alert/alertModal'
import { FaCheckSquare } from "react-icons/fa";
import { MdError } from "react-icons/md";
import HandleSignedUpEmails from '../utils/handleSignedUpEmails'
import TextModal from '../components/modal/TextModal'


const Register = () => {

    const [loading, setLoading] = useState(false)
    const [displayRegisterAlert, setDisplayRegisterAlert] = useState('hidden')
    const [displayRegisterErrorAlert, setDisplayRegisterErrorAlert] = useState('hidden')
    const [errorText, setErrorText] = useState('')
    const [tofDisplay, setTofDisplay] = useState("hidden")
    const navigate = useNavigate()




    const RegisterSchema = Yup.object({
        Email: Yup.string().email('Invalid email address').required('Required'),
        Password: Yup.string().min(8, 'Your password must contains at least 8 characters').required('Required'),
        ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required('Required'),
        Accept: Yup.boolean().oneOf([true], 'You must accept the terms of use').required('Required')
    })


    const RegisterControl = useFormik({
        initialValues: {
            Email: '',
            Password: '',
            ConfirmPassword: '',
            Accept: false
        },
        onSubmit: async (values) => {

            setLoading(true)
            const checkEmail = await HandleSignedUpEmails(RegisterControl.values['Email'])

            if (checkEmail) {

                const res = await handleSignUp(RegisterControl.values)
                if (res) {
                    setDisplayRegisterAlert("flex")
                } else {
                    setErrorText("Please check your internet connection and try again.")
                    setDisplayRegisterErrorAlert("flex")
                }

            } else {
                setErrorText("A user is using this email on NewzKast! Please use another email and try again!")
                setDisplayRegisterErrorAlert("flex")
            }

            setLoading(false)


        },
        validationSchema: RegisterSchema
    })



    if (!loading) {
        return (
            <Wrapper styles={'flex-col'} >

                <div className="flex flex-col space-y-4 items-center">

                    <ColoredLogo />

                    <form className='flex flex-col items-center py-4 ' onSubmit={RegisterControl.handleSubmit} >

                        <FormTitle title={'Register'} />

                        {
                            Object.keys(RegisterControl.values).map((value, id) => {
                                if (value !== 'Accept') {
                                    return (
                                        <InputWrapper
                                            errorStyle={
                                                RegisterControl.touched[value] && RegisterControl.errors[value] ? true : false
                                            }
                                            key={id}
                                        >
                                            <InputTitle
                                                title={value}
                                                requiredInput={true}
                                            />
                                            <FormInput type={value.toLowerCase()} name={value}
                                                value={RegisterControl.values[value]}
                                                handleValue={RegisterControl.handleChange}
                                                handleBlur={RegisterControl.handleBlur}

                                            />
                                        </InputWrapper>
                                    )
                                }

                            }

                            )
                        }

                        <div className='space-x-4 flex items-center justify-center w-72 px-4 my-2'>

                            <AcceptButton
                                styles={'bg-purple-1000'}
                                ariaLabel={'Accept terms of use'}
                                errorStyle={
                                    RegisterControl.touched.Accept && RegisterControl.errors.Accept ? true : false
                                }
                                handleAcceptState={RegisterControl}
                                handleBlur={RegisterControl.handleBlur}
                                AcceptState={RegisterControl.values.Accept} />

                            <TermsOfUse setDisplay={() => setTofDisplay("flex")} />




                        </div>

                        <ModalContainer display={tofDisplay} setDisplay={setTofDisplay}>
                            <TextModal setDisplay={() => setTofDisplay("hidden")} />
                        </ModalContainer>

                        <MainButton
                            title={'Register'}
                            type={'submit'}
                            lgBTN={true}
                            styles={'py-3 my-2 text-sm bg-purple-1000'}
                            action={() => console.log('open verify phone number box')}
                        />

                        <ModalContainer display={displayRegisterAlert} setDisplay={setDisplayRegisterAlert}>
                            <AlertModal
                                title={'Signed up successfuly!'}
                                alertInfo={'Please check your email for a confirmation message from NewzCast.'}
                                icon={<FaCheckSquare className="mx-1 text-lg text-purple-1000" />}
                                btnTitle={'Ok'}
                                action={() => navigate("/login")}
                            />
                        </ModalContainer>

                        <ModalContainer display={displayRegisterErrorAlert} setDisplay={setDisplayRegisterErrorAlert}>
                            <AlertModal
                                title={'Sign up error!'}
                                alertInfo={errorText}
                                icon={<MdError className="mx-1 text-lg text-red-600" />}
                                btnTitle={'Ok'}
                                action={() => setDisplayRegisterErrorAlert('hidden')}
                            />
                        </ModalContainer>



                    </form>

                </div>

            </Wrapper >
        )

    } else {
        return <Loading display={loading} />
    }
}

export default Register