import FormInput from "../form/FormInput";
import FormTitle from "../form/FormTitle";
import InputTitle from "../form/InputTitle";
import InputWrapper from "../form/InputWrapper";
import MainButton from "../landing/MainButton";
import { useState } from "react";
import ModalClsoeBTN from "./ModalCloseBTN";


export default function ModalBox({ setDisplay, phoneNumber }) {

    const [verificationCode, SetVerificationCode] = useState('')


    return (

        <div className="w-[340px] h-[350px] p-4 rounded-md bg-white flex flex-col items-center justify-around"
        >
            <div className="flex items-center justify-center space-x-4">
                <ModalClsoeBTN handleClose={setDisplay} />
                <FormTitle title={'Verify'} />
            </div>

            <p className=" text-base text-gray-500 font-normal ">
                We have sent a pin to your <span className=" font-bold  text-gray-700">{phoneNumber}</span>.
                Please enter the pint to verify your account.
            </p>

            <InputWrapper styles={'w-72'}>
                <InputTitle title={'Enter pin'} />
                <FormInput value={verificationCode} handleValue={SetVerificationCode} />
            </InputWrapper>

            <MainButton title={'Verify'} lgBTN={true} styles={'bg-purple-1000 p-3'} />

            <MainButton title={'Resend verification code'} styles={'text-black text-sm text-gray-700'} action={() => alert("not available")} />

        </div>
    )

}