import supabaseClient from "./SupabaseClient"

const handleLogIn = async (LoginFormValues) => {

    try {
        const { data, error } = await supabaseClient.auth.signInWithPassword({
            email: LoginFormValues.Email,
            password: LoginFormValues.Password
        })




        if (!error) {
            return data
        }

        console.log(error, "log in error")
        return false


    } catch (error) {
        console.log(error)
        return false
    }

}

export default handleLogIn