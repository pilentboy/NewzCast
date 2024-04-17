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

const Register = () => {

    const [acceptRules, setAcceptRules] = useState(false)

    const [phonenVerifyModalIDisplay, setPhonenVerifyModalIDisplay] = useState('hidden')

    const handleRegisterSubmit = (e) => {
        e.preventDefault()
        setPhonenVerifyModalIDisplay("flex")
    }

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
            console.log(JSON.stringify(values))
        }
    })

    return (
        <Wrapper styles={'flex-col'} >

            <div className="flex flex-col items-center">

                <ColoredLogo />

                <form className='flex flex-col  justify-center items-center ' onSubmit={handleRegister.handleSubmit} >

                    <FormTitle title={'Register'} />
                    <div className='flex justify-between mt-2 w-72'>

                        <InputWrapper styles={'w-[140px]'}>
                            <InputTitle title={'First Name'} />
                            <FormInput type={'text'} name={'FirstName'} value={handleRegister.values.FirstName} handleValue={handleRegister.handleChange} />
                        </InputWrapper>

                        <InputWrapper styles={'w-[140px]'}>
                            <InputTitle title={'Last Name'} />
                            <FormInput type={'text'} name={'LastName'} value={handleRegister.values.LastName} handleValue={handleRegister.handleChange} />
                        </InputWrapper>
                    </div>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Username'} />
                        <FormInput type={'text'} name={'UserName'} value={handleRegister.values.UserName} handleValue={handleRegister.handleChange} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Email'} />
                        <FormInput type={'email'} name={'Email'} value={handleRegister.values.Email} handleValue={handleRegister.handleChange} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Phone Number'} />
                        <FormInput type={'phone'} name={'PhoneNumber'} value={handleRegister.values.PhoneNumber} handleValue={handleRegister.handleChange} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Password'} />
                        <FormInput type={'password'} name={'Password'} value={handleRegister.values.Password} handleValue={handleRegister.handleChange} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Confirm Password'} />
                        <FormInput type={'password'} name={'ConfirmPassword'} value={handleRegister.values.ConfirmPassword} handleValue={handleRegister.handleChange} />
                    </InputWrapper>

                    <div className='space-x-4 flex items-center justify-center w-72 px-4 '>

                        <AcceptButton styles={'bg-purple-1000'} ariaLabel={'Accept terms of use'} handleAcceptState={setAcceptRules} AcceptState={acceptRules} />

                        <TermsOfUse />


                    </div>

                    <MainButton title={'Register'} type={'submit'} styles={'py-3 my-2 text-sm bg-purple-1000'} action={() => console.log('open verify phone number box')} lgBTN={true} />

                    <ModalContainer display={phonenVerifyModalIDisplay} setDisplay={setPhonenVerifyModalIDisplay} >

                        <ModalBox phoneNumber={handleRegister.values.PhoneNumber} setDisplay={setPhonenVerifyModalIDisplay} />

                    </ModalContainer>


                </form>

            </div>

        </Wrapper>
    )
}

export default Register