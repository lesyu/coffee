import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv';
dotenv.config();

if (!process.env.DATABASE_URL) {
  console.error('Missing database configuration:');
  console.error('1. Verify DATABASE_URL exists in .env file');
  console.error('2. Check URL format: postgresql://user:password@host:port/database');
  process.exit(1);
}
const supabase = createClient(
  process.env.REACT_SUPABASE_DATABASE_URL,
  process.env.REACT_SUPABASE_ANON_KEY
);

async function fetchData() {
  try {
    const { data, error } = await supabase
      .from('lescoffee') // Replace with your actual table name
      .select('*');

    if (error) {
      throw error;
    }

    console.log('Data fetched:', data);
  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}

fetchData();

