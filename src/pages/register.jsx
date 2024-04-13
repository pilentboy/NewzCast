import Wrapper from '../components/authenticate/Wrapper'
import ColoredLogo from '../components/ColoredLogo'
import FormTitle from '../components/form/FormTitle'
import InputWrapper from '../components/form/InputWrapper'
import FormInput from '../components/form/FormInput'
import InputTitle from '../components/form/InputTitle'
import Button from '../components/landing/Button'

const Register = () => {

    return (
        <Wrapper styles={'flex-col'}>

            <div className="flex flex-col items-center">

                <ColoredLogo />

                <form className='flex flex-col justify-center items-center space-y-4' >
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

                    <Button title={'Register'} styles={'w-72 py-3 text-sm bg-purple-1000'} />

                </form>

            </div>

        </Wrapper>
    )
}

export default Register