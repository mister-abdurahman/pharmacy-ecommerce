import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://uesanqirfewyoexziswy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVlc2FucWlyZmV3eW9leHppc3d5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzMzkxNzYsImV4cCI6MjA0OTkxNTE3Nn0.-ollu7EKa1MNBvivFpgayv3V4dtMECDk8vZfWDeejWs";
export const supabase = createClient(supabaseUrl, supabaseKey);
