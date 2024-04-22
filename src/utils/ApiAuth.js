import { createClient } from "@supabase/supabase-js"

const apiKey = process.env.REACT_APP_API_KEY;
const urlKey=process.env.REACT_APP_URL_KEY;

const supabase = createClient(
    urlKey,
    apiKey
)

export default supabase