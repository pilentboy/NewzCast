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

import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const Register = () => {

    const [acceptRules, setAcceptRules] = useState(false)
    const [registerDisable, setRegisterDisable] = useState(true)

    const [phonenVerifyModalIDisplay, setPhonenVerifyModalIDisplay] = useState('hidden')

    const RegisterSchema = Yup.object({
        FirstName: Yup.string().max(19, 'Must be 19 characters or less').required('Required'),
        LastName: Yup.string().max(35, 'Must be 35 characters or less').required('Required'),
        Email: Yup.string().email('Invalid email address').required('Required'),
        UserName: Yup.string().min(6, 'Must be at least 6 characters').max(30, 'Can not be more than 30 characters').required('Required'),
        PhoneNumber: Yup.string().min(11, 'Invalid Phone number').max(11, 'Invalid Phone number').required("Required"),
        Password: Yup.string().min(8, 'Your password must contains at least 8 characters').required('Required'),
        ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required('Required'),
    })

    const handleRegister = useFormik({
        initialValues: {
            FirstName: '',
            LastName: '',
            UserName: '',
            Email: '',
            PhoneNumber: '',
            Password: '',
            ConfirmPassword: ''
        },
        onSubmit: values => {
            setPhonenVerifyModalIDisplay("flex")
            setRegisterDisable(true)
        },
        validationSchema: RegisterSchema
    })




    return (
        <Wrapper styles={'flex-col'} >

            <div className="flex flex-col items-center">

                <ColoredLogo />

                <form className='flex flex-col  justify-center items-center ' onSubmit={handleRegister.handleSubmit} >

                    <FormTitle title={'Register'} />

                    <div className='flex justify-between mt-2 w-72'>

                        <InputWrapper
                            styles={'w-[140px]'}
                            errorStyle={
                                handleRegister.touched.FirstName && handleRegister.errors.FirstName ? true : false
                            }
                        >
                            <InputTitle title={'First Name'} />
                            <FormInput type={'text'} name={'FirstName'}
                                value={handleRegister.values.FirstName}
                                handleValue={handleRegister.handleChange}
                                handleBlur={handleRegister.handleBlur}
                            />
                        </InputWrapper>

                        <InputWrapper
                            styles={'w-[140px]'}
                            errorStyle={
                                handleRegister.touched.LastName && handleRegister.errors.LastName ? true : false
                            }
                        >
                            <InputTitle title={'Last Name'} />
                            <FormInput type={'text'} name={'LastName'}
                                value={handleRegister.values.LastName}
                                handleValue={handleRegister.handleChange}
                                handleBlur={handleRegister.handleBlur}
                            />

                        </InputWrapper>
                    </div>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            handleRegister.touched.UserName && handleRegister.errors.UserName ? true : false
                        }
                    >
                        <InputTitle title={'Username'} />
                        <FormInput type={'text'} name={'UserName'}
                            value={handleRegister.values.UserName}
                            handleValue={handleRegister.handleChange}
                            handleBlur={handleRegister.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            handleRegister.touched.Email && handleRegister.errors.Email ? true : false
                        }
                    >
                        <InputTitle title={'Email'} />
                        <FormInput type={'email'} name={'Email'}
                            value={handleRegister.values.Email}
                            handleValue={handleRegister.handleChange}
                            handleBlur={handleRegister.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            handleRegister.touched.PhoneNumber && handleRegister.errors.PhoneNumber ? true : false
                        }
                    >
                        <InputTitle title={'Phone Number'} />
                        <FormInput type={'phone'} name={'PhoneNumber'}
                            value={handleRegister.values.PhoneNumber}
                            handleValue={handleRegister.handleChange}
                            handleBlur={handleRegister.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            handleRegister.touched.Password && handleRegister.errors.Password ? true : false}
                    >
                        <InputTitle title={'Password'} />
                        <FormInput type={'password'} name={'Password'}
                            value={handleRegister.values.Password}
                            handleValue={handleRegister.handleChange}
                            handleBlur={handleRegister.handleBlur}
                        />
                    </InputWrapper>

                    <InputWrapper
                        styles={'w-72'}
                        errorStyle={
                            handleRegister.touched.ConfirmPassword && handleRegister.errors.ConfirmPassword ? true : false
                        }
                    >
                        <InputTitle title={'Confirm Password'} />
                        <FormInput type={'password'} name={'ConfirmPassword'}
                            value={handleRegister.values.ConfirmPassword}
                            handleValue={handleRegister.handleChange}
                            handleBlur={handleRegister.handleBlur}
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

                        <ModalBox phoneNumber={handleRegister.values.PhoneNumber} setDisplay={setPhonenVerifyModalIDisplay} />

                    </ModalContainer>


                </form>

            </div>

        </Wrapper >
    )
}

export default Register