import supabaseClient from "./supabaseClient";

const SignUp = async (RegisterFormValues) => {

    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: RegisterFormValues.Email,
            password: RegisterFormValues.Password,
            phone: RegisterFormValues.PhoneNumber,
        })

        if (!error) {
            console.log("sign up successfuly!",data)
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

export default SignUp