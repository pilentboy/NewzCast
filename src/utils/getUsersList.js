import supabaseAdmin from "./supabaseAdmin"


export default async function GetUsersList() {
    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()
    console.log(users, error)
}


