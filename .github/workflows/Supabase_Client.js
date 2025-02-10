
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = process.env.REACT_SUPABASE_DATABASE_URL
const supabaseKey = process.env.REACT_SUPABASE_ANON_KEY

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase