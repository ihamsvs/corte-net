import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if(!supabaseUrl || !supabaseAnonKey){
    throw new Error("Faltan variables de supabase")
}

// Crea el cliente de Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey)