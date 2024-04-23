import supabaseAdmin from "./supabaseAdmin"


export default async function GetUsers() {
    const { data: { users }, error } = await supabaseAdmin.auth.admin.listUsers()
    console.log(users, error)
}

