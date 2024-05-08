import supabaseClient from "./SupabaseClient";

const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut()
    if (!error) {
        return true
    }
    console.log(error)
}

export default handleSignOut
