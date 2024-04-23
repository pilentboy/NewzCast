import supabase from "./SupabaseClient";

const handleLogIn = async (LoginFormValues) => {

    try {
        const { data, error } = await supabase.auth.signInWithPassword({
            email: LoginFormValues.Email,
            password: LoginFormValues.Password
        })

        if (!error) {
            console.log("logged insuccessfuly!")
            console.log(data)
            return true
        }

        console.log(error, "log in error")
        return false


    } catch (error) {
        console.log(error)
        return false
    }

}

export default handleLogIn