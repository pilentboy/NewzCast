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
import * as Yup from 'yup'

const Register = () => {

    const [acceptRules, setAcceptRules] = useState(false)

    const [phonenVerifyModalIDisplay, setPhonenVerifyModalIDisplay] = useState('hidden')
    const [createPinCode, setCreatePinCode] = useState(false)

    const RegisterSchema = Yup.object({
        FirstName: Yup.string().max(19, 'Must be 19 characters or less').required('Required'),
        LastName: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
        Email: Yup.string().email('Invalid email address').required('Required'),
        Username: Yup.string().min(6, 'Must be at least 6 characters').max(30, 'Can not be more than 30 characters').required('Required'),
        PhoneNumber: Yup.string().min(11, 'Invalid Phone number').max(11, 'Invalid Phone number').required("Required"),
        Password: Yup.string().min(8, 'Your password must contains at least 8 characters').required('Required'),
        ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required('Required'),
    })



    const RegisterControl = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            Username: '',
            Email: '',
            PhoneNumber: '',
            Password: '',
            ConfirmPassword: ''
        },
        onSubmit: values => {
            HandleRegister()
            setPhonenVerifyModalIDisplay("flex")
        },
        validationSchema: RegisterSchema
    })


    // save register in the local storage -- testing

    const HandleRegister = () => {
        window.localStorage.setItem('User Info', JSON.stringify(RegisterControl.values))
        setCreatePinCode(true)
    }





    return (
        <Wrapper styles={'flex-col'} >

            <div className="flex flex-col items-center">

                <ColoredLogo />

                <form className='flex flex-col  justify-center items-center ' onSubmit={RegisterControl.handleSubmit} >

                    <FormTitle title={'Register'} />

                    <div className='flex justify-between mt-2 w-72'>

                        <InputWrapper
                            styles={'w-[140px]'}
                            errorStyle={
                                RegisterControl.touched.FirstName && RegisterControl.errors.FirstName ? true : false
                            }
                        >
                            <InputTitle title={'First Name'} />
                            <FormInput type={'text'} name={'FirstName'}
                                value={RegisterControl.values.FirstName}
                                handleValue={RegisterControl.handleChange}
                                handleBlur={RegisterControl.handleBlur}
                            />
                        </InputWrapper>

                        <InputWrapper
                            styles={'w-[140px]'}
                            errorStyle={
                                RegisterControl.touched.LastName && RegisterControl.errors.LastName ? true : false
                            }
                        >
                            <InputTitle title={'Last Name'} />
                            <FormInput type={'text'} name={'LastName'}
                                value={RegisterControl.values.LastName}
                                handleValue={RegisterControl.handleChange}
                                handleBlur={RegisterControl.handleBlur}
                            />

                        </InputWrapper>
                    </div>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            RegisterControl.touched.Username && RegisterControl.errors.Username ? true : false
                        }
                    >
                        <InputTitle title={'Username'} />
                        <FormInput type={'text'} name={'Username'}
                            value={RegisterControl.values.Username}
                            handleValue={RegisterControl.handleChange}
                            handleBlur={RegisterControl.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            RegisterControl.touched.Email && RegisterControl.errors.Email ? true : false
                        }
                    >
                        <InputTitle title={'Email'} />
                        <FormInput type={'email'} name={'Email'}
                            value={RegisterControl.values.Email}
                            handleValue={RegisterControl.handleChange}
                            handleBlur={RegisterControl.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            RegisterControl.touched.PhoneNumber && RegisterControl.errors.PhoneNumber ? true : false
                        }
                    >
                        <InputTitle title={'Phone Number'} />
                        <FormInput type={'phone'} name={'PhoneNumber'}
                            value={RegisterControl.values.PhoneNumber}
                            handleValue={RegisterControl.handleChange}
                            handleBlur={RegisterControl.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            RegisterControl.touched.Password && RegisterControl.errors.Password ? true : false}
                    >
                        <InputTitle title={'Password'} />
                        <FormInput type={'password'} name={'Password'}
                            value={RegisterControl.values.Password}
                            handleValue={RegisterControl.handleChange}
                            handleBlur={RegisterControl.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            RegisterControl.touched.ConfirmPassword && RegisterControl.errors.ConfirmPassword ? true : false
                        }
                    >
                        <InputTitle title={'Confirm Password'} />
                        <FormInput type={'password'} name={'ConfirmPassword'}
                            value={RegisterControl.values.ConfirmPassword}
                            handleValue={RegisterControl.handleChange}
                            handleBlur={RegisterControl.handleBlur}
                        />
                    </InputWrapper>

                    <div className='space-x-4 flex items-center justify-center w-72 px-4 '>

                        <AcceptButton styles={'bg-purple-1000'} ariaLabel={'Accept terms of use'} handleAcceptState={setAcceptRules} AcceptState={acceptRules} />

                        <TermsOfUse />


                    </div>

                    <MainButton
                        title={'Register'}
                        type={'submit'}
                        lgBTN={true}
                        styles={'py-3 my-2 text-sm bg-purple-1000'}
                        action={() => console.log('open verify phone number box')}
                    />

                    <ModalContainer display={phonenVerifyModalIDisplay} setDisplay={setPhonenVerifyModalIDisplay} >

                        <ModalBox phoneNumber={RegisterControl.values.PhoneNumber} setDisplay={setPhonenVerifyModalIDisplay} createPinCode={createPinCode} />

                    </ModalContainer>


                </form>

            </div>

        </Wrapper >
    )
}

export default Register