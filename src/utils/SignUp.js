import supabase from "./ApiAuth";

const SignUp = async (RegisterFormValues) => {

    try {
        const { data, error } = await supabase.auth.signUp({
            email: RegisterFormValues.Email,
            password: RegisterFormValues.Password,
            phone: RegisterFormValues.PhoneNumber,
        })

        if (!error) {
            console.log("sign up successfuly!")
            console.log(data)
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