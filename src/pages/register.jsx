import Wrapper from '../components/authenticate/Wrapper'
import ColoredLogo from '../components/ColoredLogo'
import FormTitle from '../components/form/FormTitle'
import InputWrapper from '../components/form/InputWrapper'
import FormInput from '../components/form/FormInput'
import InputTitle from '../components/form/InputTitle'
import Button from '../components/landing/Button'
import AcceptButton from '../components/form/AcceptButton'
import TermsOfUse from '../components/authenticate/TermsOfUse'
import { useState } from 'react'

const Register = () => {
    const [acceptRules, setAcceptRules] = useState(false)

    const [SignUpValues, setSignUpValues] = useState([
        {
            FirstName: '',
            title: 'First Name'
        },
        {
            LastName: '',
            title: 'Last Name'
        },
        {
            Email: '',
            title: 'Email',
            type: 'email'
        },
        {
            Password: '',
            title: 'Password',
            type: 'password'
        },
        {
            ConfirmPassword: '',
            title: 'Confirm Password',
            type: 'password'
        },
        {
            PhoneNumber: '',
            title: 'phone'
        },
    ])

    return (
        <Wrapper styles={'flex-col'}>

            <div className="flex flex-col items-center">

                <ColoredLogo />

                <form className='flex flex-col justify-center items-center space-y-4' onSubmit={(e) => e.preventDefault()} >

                    <FormTitle title={'Register'} />
                    <div className='flex justify-between  w-72'>

                        <InputWrapper styles={'w-[140px]'}>
                            <InputTitle title={'First Name'} />
                            <FormInput type={'text'} />
                        </InputWrapper>

                        <InputWrapper styles={'w-[140px]'}>
                            <InputTitle title={'Last Name'} />
                            <FormInput type={'text'} />
                        </InputWrapper>
                    </div>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Username'} />
                        <FormInput type={'text'} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Email'} />
                        <FormInput type={'email'} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Phone Number'} />
                        <FormInput type={'phone'} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Password'} />
                        <FormInput type={'password'} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Confirm Password'} />
                        <FormInput type={'password'} />
                    </InputWrapper>

                    <div className='space-x-2 flex items-center w-72 px-4 '>

                        <AcceptButton styles={'bg-purple-1000'} ariaLabel={'Accept terms of use'} handleAcceptState={setAcceptRules} AcceptState={acceptRules} />

                        <TermsOfUse />


                    </div>

                    <Button title={'Register'} styles={'w-72 py-3 text-sm bg-purple-1000'} />

                </form>

            </div>

        </Wrapper>
    )
}

export default Register