// config.js
export const config = {
    supabaseUrl: process.env.SUPABASE_URL || "https://frugoxerstqqlzuuavze.supabase.co",
    supabaseKey: process.env.SUPABASE_KEY || "eyJhbG...VeOc",
    // 添加安全防护
    tables: {
        Discuss: {
            rlsEnabled: true,  // 确保实际已启用
            publicAccess: "insert" // 根据需求调整
        }
    }
};
