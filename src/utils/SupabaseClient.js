import { createClient } from "@supabase/supabase-js"

const apiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdHNwaXJlY3NhaXVzd2ludm1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTM1ODE4MDAsImV4cCI6MjAyOTE1NzgwMH0.s93VlFwO74ouRH1TUabiVLetzkFl0tYRB6HsmyTZN4E";
const urlKey = "https://sftspirecsaiuswinvmc.supabase.co";


const supabaseClient = createClient(
    urlKey,
    apiKey
)





export default supabaseClient
