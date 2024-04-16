import Wrapper from '../components/authenticate/Wrapper'
import ColoredLogo from '../components/ColoredLogo'
import FormTitle from '../components/form/FormTitle'
import InputWrapper from '../components/form/InputWrapper'
import FormInput from '../components/form/FormInput'
import InputTitle from '../components/form/InputTitle'
import MainButton from '../components/landing/MainButton'
import AcceptButton from '../components/form/AcceptButton'
import TermsOfUse from '../components/authenticate/TermsOfUse'
import { useState } from 'react'

const Register = () => {

    const [acceptRules, setAcceptRules] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [phoneNumber, SetPhoneNumber] = useState('')
    const [userName, setUserName] = useState('')


    return (
        <Wrapper styles={'flex-col'}>

            <div className="flex flex-col items-center">

                <ColoredLogo />

                <form className='flex flex-col  justify-center items-center space-y-4' onSubmit={(e) => e.preventDefault()} >

                    <FormTitle title={'Register'} />
                    <div className='flex justify-between  w-72'>

                        <InputWrapper styles={'w-[140px]'}>
                            <InputTitle title={'First Name'} />
                            <FormInput type={'text'} value={firstName} handleValue={setFirstName} />
                        </InputWrapper>

                        <InputWrapper styles={'w-[140px]'}>
                            <InputTitle title={'Last Name'} />
                            <FormInput type={'text'} value={lastName} handleValue={setLastname} />
                        </InputWrapper>
                    </div>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Username'} />
                        <FormInput type={'text'} value={userName} handleValue={setUserName} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Email'} />
                        <FormInput type={'email'} value={email} handleValue={setEmail} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Phone Number'} />
                        <FormInput type={'phone'} value={phoneNumber} handleValue={SetPhoneNumber} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Password'} />
                        <FormInput type={'password'} value={password} handleValue={setPassword} />
                    </InputWrapper>

                    <InputWrapper styles={'w-72'}>
                        <InputTitle title={'Confirm Password'} />
                        <FormInput type={'password'} value={confirmPassword} handleValue={setConfirmPassword} />
                    </InputWrapper>

                    <div className='space-x-4 flex items-center justify-center w-72 px-4 '>

                        <AcceptButton styles={'bg-purple-1000'} ariaLabel={'Accept terms of use'} handleAcceptState={setAcceptRules} AcceptState={acceptRules} />

                        <TermsOfUse />


                    </div>

                    <MainButton title={'Register'} type={'submit'} styles={'py-3 text-sm bg-purple-1000'} lgBTN={true} />

                </form>

            </div>

        </Wrapper>
    )
}

export default Register