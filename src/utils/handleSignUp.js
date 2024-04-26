import supabaseClient from "./supabaseClient";

const handleSignedUpEmail=async (email)=>{
	const { data, error } = await supabaseClient
    .from('auth.users')
    .select()
    .eq('email', email);
	  if (data && data.length > 0) {
	console.log(data,error,'check email')
    return false;
  }
}

const handleSignUp = async (RegisterFormValues) => {
	
	if(!handleSignedUpEmail()){
		return false
	}
	
    try {
        const { data, error } = await supabaseClient.auth.signUp({
            email: RegisterFormValues.Email,
            password: RegisterFormValues.Password,
            phone: RegisterFormValues.PhoneNumber,
        })

        if (!error) {
            console.log("sign up successfuly!",data)
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

export default handleSignUp