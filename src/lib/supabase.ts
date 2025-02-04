import { createClient } from "@supabase/supabase-js";
import getEnvVariable from "./getEnv";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

export const supabase = createClient(supabaseUrl, supabaseKey);

// export const supabase = createClient(
//   getEnvVariable("SUPABASE_URL"),
//   getEnvVariable("SUPABASE_KEY")
// );
