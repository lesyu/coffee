import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_SUPABASE_DATABASE_URL
const supabaseAnonKey = process.env.REACT_SUPABASE_ANON_KEY;

const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

const example = {
    foo: "Hello",
    bar: {
        baz: 42
    },
    en: 'TWO'
};

// Function to get organization name by ID
async function getOrganizationNameById(id) {
    const { data, error } = await supabaseClient
        .from('lesyu')
        .select('Discuss')
        .eq('id', id);

    if (error) {
        console.error('Error fetching organization:', error);
        return null;
    }
    return data;
}

// Function to insert a row into the Discuss table
async function insertDiscussionEntry(comment, ipAdd) {
    const { data, error } = await supabaseClient
        .from('Discuss')
        .insert([
            {
                comment: userMessage,
                ip_add: 'USER_IP_ADDRESS',
                created_at: new Date() // Automatically set the current timestamp
                // log_id is omitted to let Supabase handle it
            }
        ]);

    if (error) {
        console.error('Error inserting discussion entry:', error);
        return null;
    }
    return data;
}

// Example usage
getOrganizationNameById(42).then(name => {
    console.log('Organization Name:', name);
});

insertDiscussionEntry('This is a sample comment', '192.168.1.1').then(data => {
    console.log('Inserted Data:', data);
});
