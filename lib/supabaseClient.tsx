import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://mmhejhqmlpfetypsqdhl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1taGVqaHFtbHBmZXR5cHNxZGhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI1MjU5ODYsImV4cCI6MjA3ODEwMTk4Nn0.NS87ATIV1CTjJMZzv4CEfec-Le2f9ymeC_lEYiEEPYM'
export const supabase = createClient(supabaseUrl, supabaseKey);