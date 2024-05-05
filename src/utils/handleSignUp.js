import supabaseClient from "./SupabaseClient";


const handleSignUp = async (RegisterFormValues) => {


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



}

export default handleSignUp