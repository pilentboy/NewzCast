import supabase from "./SupabaseClient";

const SignUp = async (RegisterFormValues) => {

    try {
        const { data, error } = await supabase.auth.signUp({
            email: RegisterFormValues.Email,
            password: RegisterFormValues.Password,
            phone: RegisterFormValues.PhoneNumber,
        })

        if (!error) {
            console.log("sign up successfuly!")
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