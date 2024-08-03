

import { createClient } from "@supabase/supabase-js";

const urlKey = "https://sftspirecsaiuswinvmc.supabase.co";
const roleKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNmdHNwaXJlY3NhaXVzd2ludm1jIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzU4MTgwMCwiZXhwIjoyMDI5MTU3ODAwfQ.H167FWUIMq_uzIgNYWFpMbRRmXt62xzs4By-mbOEAU4"


const supabaseAdmin = createClient(urlKey, roleKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false
    }
})


export default supabaseAdmin