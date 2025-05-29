import { createClient } from '@supabase/supabase-js';
import type { Database as DatabaseTypes } from '../../client/src/lib/database.types';

const supabaseUrl = 'https://vjeeycdzwojildoiwwhh.supabase.co';
const supabaseServiceKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqZWV5Y2R6d29qaWxkb2l3d2hoIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODQzNjIzOCwiZXhwIjoyMDY0MDEyMjM4fQ.6Jq3yQmKJ8QZQZQZQZQZQZQZQZQZQZQZQZQZQZQZQ';

export const supabase = createClient<DatabaseTypes>(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
});
