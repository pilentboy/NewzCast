import supabaseAdmin from "./SupabaseAdmin"

async function HandleSignedUpEmails(userEmail) {
    const { data: { users } } = await supabaseAdmin.auth.admin.listUsers()
    const emails = users.filter((email) => email['email'] === userEmail)
    if (emails.length >= 1) {
        return false
    }
    return true
}

export default HandleSignedUpEmails