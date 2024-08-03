import supabaseAdmin from "./supabaseAdmin"

async function HandleSignedUpEmails(userEmail) {
    const { data: { users } } = await supabaseAdmin.auth.admin.listUsers() // get users list
    const emails = users.filter((email) => email['email'] === userEmail) 
    if (emails.length >= 1) { // check if an email is already signed up
        return false
    }
    return true
}

export default HandleSignedUpEmails