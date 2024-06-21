import supabaseClient from "./SupabaseClient";



const handleUpdateEmail= async newEmail => {
    const { data, error } = await supabaseClient.auth.updateUser({
        email: newEmail
    })
    
    console.log(data)
    console.log(error)
}

export default handleUpdateEmail