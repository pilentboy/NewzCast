import supabaseClient from "./supabaseClient";
import HandleSignedUpEmails from "./handleSignedUpEmails";


const handleSignUp = async (RegisterFormValues) => {

    const handleSignupEmails = await HandleSignedUpEmails(RegisterFormValues['Email'])
    if (!handleSignupEmails) {
        console.log("error")
        return false
    }

    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: RegisterFormValues.Email,
            password: RegisterFormValues.Password,
            phone: RegisterFormValues.PhoneNumber,
        })

        if (!error) {
            console.log("sign up successfuly!", data)
            return true
        } else {
            console.log(error, "sign up error")
            return false
        }

    } catch (error) {
        console.log(error)
        return false
    }

}

export default handleSignUp