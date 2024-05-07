import supabaseClient from "./SupabaseClient";

const handleSignOut = async () => {
    const { error } = await supabaseClient.auth.signOut()
    if (!error) {
        return true
    }
}

export default handleSignOut
