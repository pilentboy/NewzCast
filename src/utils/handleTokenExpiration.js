
import supabaseClient from "./SupabaseClient";


const handleTokenExpiration = async (handleUserAuth) => {

    try {
        const session = await supabaseClient.auth.getSession();
        if (!session['data']['session']) {
            // Token has expired or user is not logged in
            await supabaseClient.auth.signOut();
            handleUserAuth();
        }
    } catch (error) {
        console.error("Error checking token expiration:", error);
    }
};


export default handleTokenExpiration