
import supabaseClient from "./SupabaseClient";


const handleTokenExpiration = async (handleUserAuth) => {

    try {
        const session = await supabaseClient.auth.getSession();
        console.log(session)
        if (!session['data']['session']) {
            // Token has expired or user is not logged in
            await supabaseClient.auth.signOut();
            handleUserAuth();
            console.log("user's logged out")
        } else {
            console.log("User is still logged in");
        }
    } catch (error) {
        console.error("Error checking token expiration:", error);
    }
};


export default handleTokenExpiration