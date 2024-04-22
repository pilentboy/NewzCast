import FormInput from "../form/FormInput";
import FormTitle from "../form/FormTitle";
import InputTitle from "../form/InputTitle";
import InputWrapper from "../form/InputWrapper";
import MainButton from "../landing/MainButton";
import { useState, useEffect, useContext } from "react";
import ModalClsoeBTN from "./ModalCloseBTN";
import { useNavigate } from "react-router-dom";
import SignUp from "../../utils/SignUp";

export default function ModalBox({ setDisplay, phoneNumber, createPinCode, RegisterFormValues }) {

    const [verificationCode, SetVerificationCode] = useState('') // user entered value
    const [pindCode, setPinCode] = useState('12345')  // default pin code! just for testing

    const navigate = useNavigate()
    const checkVerifyPin = async () => {
        if (verificationCode === pindCode) {
            setDisplay('hidden')
            const res = await SignUp(RegisterFormValues)
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

    useEffect(() => {
        if (createPinCode) {
            alert(`pin code: ${pindCode}`)
        }
    }, [createPinCode])



    return (

        <div className="w-[340px] h-[350px] p-4 rounded-md bg-white flex flex-col items-center justify-around"
        >
            <div className="flex items-center justify-center space-x-4">
                <ModalClsoeBTN handleClose={setDisplay} />
                <FormTitle title={'Verify'} />
            </div>

            <p className=" text-base text-gray-500 font-normal ">
                We have sent a pin to your <span className=" font-bold  text-gray-700">{phoneNumber}</span>.
                Please enter the pin to verify your account.
            </p>

            <InputWrapper styles={'w-72'}>
                <InputTitle title={'Enter pin'} />
                <FormInput value={verificationCode} handleValue={(e) => SetVerificationCode(e.target.value)} />
            </InputWrapper>

            <MainButton title={'Verify'} action={checkVerifyPin} lgBTN={true} styles={'bg-purple-1000 p-3'} type={'button'} />

            <MainButton title={'Resend verification code'} styles={'text-black text-sm text-gray-700'} type={'button'} action={() => alert("not available")} />

        </div>
    )

}