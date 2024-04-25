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
import * as Yup from 'yup'
const Register = () => {

    const [phonenVerifyModalIDisplay, setPhonenVerifyModalIDisplay] = useState('hidden')
    const [createPinCode, setCreatePinCode] = useState(false)
    const [loading, setLoading] = useState(false)






    const RegisterSchema = Yup.object({
        Email: Yup.string().email('Invalid email address').required('Required'),
        PhoneNumber: Yup.string().min(11, 'Invalid Phone number').max(11, 'Invalid Phone number'),
        Password: Yup.string().min(8, 'Your password must contains at least 8 characters').required('Required'),
        ConfirmPassword: Yup.string().oneOf([Yup.ref('Password'), null], 'Passwords must match')
            .required('Required'),
        Accept: Yup.boolean().oneOf([true], 'You must accept the terms of use').required('Required')
    })


    const RegisterControl = useFormik({
        initialValues: {
            Email: '',
            PhoneNumber: '',
            Password: '',
            ConfirmPassword: '',
            Accept: false
        },
        onSubmit: values => {
            if (RegisterControl.values.PhoneNumber !== '') {
                setCreatePinCode(true)
                setPhonenVerifyModalIDisplay("flex")
            } else {
                console.log("test")
            }


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
                                                requiredInput={value !== 'PhoneNumber' ? true : false}
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

                            <ModalBox phoneNumber={RegisterControl.values.PhoneNumber} setDisplay={setPhonenVerifyModalIDisplay} sendPinCode={createPinCode} RegisterFormValues={RegisterControl.values}
                                setLoading={setLoading}
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