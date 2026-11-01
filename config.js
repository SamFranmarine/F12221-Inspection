// F12221 Inspection ITP — production settings.
// Replace the two values marked FILL IN with your production Supabase project's values:
//   Supabase dashboard → Project Settings → API → "Project URL" and the "anon public" key.
// The anon key is designed to be public (it is visible to every browser that opens the site);
// the data is protected by the row-level security rules in supabase/schema.sql. Never put the service_role key here.
window.F12221_CONFIG = {
  SUPABASE_URL: 'https://rbuljpthvlkqetvftdkk.supabase.co',   // FILL IN
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidWxqcHRodmxrcWV0dmZ0ZGtrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTM1MTkxMDQsImV4cCI6MjEwOTA5NTEwNH0.1JvwEe6oNREll1CoLzx7I6_5LPcGMnRf4m88EveVY0Q',              // FILL IN
  STAFF_DOMAIN: 'franmarine.com.au'                          // Franmarine addresses are editors automatically (must match staff_domain() in schema.sql)
};
