import FormInput from "../form/FormInput";
import FormTitle from "../form/FormTitle";
import InputTitle from "../form/InputTitle";
import InputWrapper from "../form/InputWrapper";
import MainButton from "../landing/MainButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import handleSignUp from "../../utils/handleSignUp";

export default function ModalBox({ setDisplay, phoneNumber, sendPinCode, RegisterFormValues, setLoading }) {

    const [verificationCode, SetVerificationCode] = useState('') // user entered pin code value
    const [pindCode, setPinCode] = useState('12345')  // default pin code! just for testing

    const navigate = useNavigate()
    const checkVerifyPin = async () => {
        if (verificationCode === pindCode) {
            setDisplay('hidden')
            setLoading(true)
            const res = await handleSignUp(RegisterFormValues) // send form data to api
            setLoading(false)
            if (res) {
                alert("signed up successfuly!, PLEASE CHECK YOUR EMAIL FOR A CONFIRMATION MESSAGE.")
                navigate("/login")
            } else {
                alert("sign up failed!")
            }
        } else {
            alert("pin code error")
        }
    }


    return (

        <div className="w-[340px] h-[350px] p-4 rounded-md bg-white flex flex-col items-center justify-around"
        >

            <FormTitle title={'Verify'} />

            <p className=" text-base text-gray-500 font-normal ">
                We have sent a pin to your <span className=" font-bold  text-gray-700">{phoneNumber}</span>.
                Please enter the pin to verify your account.
            </p>

            <InputWrapper styles={'w-72'}>
                <InputTitle title={'Enter pin'} />
                <FormInput value={verificationCode} handleValue={(e) => SetVerificationCode(e.target.value)} placeholder={'12345'} />
            </InputWrapper>

            <MainButton title={'Verify'} action={checkVerifyPin} lgBTN={true} styles={'bg-purple-1000 p-3'} type={'button'} />

            <MainButton title={'Resend verification code'} styles={'text-black text-sm text-gray-700'} type={'button'} action={() => console.log('not available')} />

        </div>
    )

}