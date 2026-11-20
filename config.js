// Configuración pública del CRM. La "anon key" de Supabase es pública por diseño:
// lo que protege los datos es RLS (solo correos dados de alta en crm_users entran).
// NUNCA poner aquí la service_role key.
window.CRM_CONFIG = {
  SUPABASE_URL: "https://tokwmadklvhhuyxcdzbx.supabase.co",
  SUPABASE_ANON_KEY: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRva3dtYWRrbHZoaHV5eGNkemJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ3NjY0OTYsImV4cCI6MjEwMDM0MjQ5Nn0.bRfqnx9csnYShSzxffhsiTH6__VLfyawweZ8MBPg8ug", // Supabase → Project Settings → API Keys → anon / publishable
};
