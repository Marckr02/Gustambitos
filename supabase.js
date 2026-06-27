import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const supabaseUrl = 'https://qiywhieghnitymkwfpvj.supabase.co';
const supabaseAnonKey = 'sb_publishable_dzFaNucunaxiTCvGktXwow_Q3rIMBT4';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);