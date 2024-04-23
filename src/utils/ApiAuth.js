import { createClient } from "@supabase/supabase-js"

const apiKey = process.env.REACT_APP_API_KEY;
const urlKey = "https://sftspirecsaiuswinvmc.supabase.co";

const supabase = createClient(
    urlKey,
    apiKey
)

export default supabase