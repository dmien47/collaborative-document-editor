export const env = {
  supabaseUrl: import.meta.env.VITE_SUPABASE_URL,
  supabaseAnonKey: import.meta.env.VITE_SUPABASE_ANON_KEY,
  collaborationServerUrl: import.meta.env.VITE_COLLAB_SERVER_URL ?? "ws://localhost:3001",
};
