// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://btvajjpqaddjcjhjzwbn.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0dmFqanBxYWRkamNqaGp6d2JuIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0NzMxNzUzMiwiZXhwIjoyMDYyODkzNTMyfQ.Hir6ZolbpS_xgJySyRAJoI7lHpLOowl46ltVU0oLVxI';

export const supabase = createClient(supabaseUrl, supabaseKey);
