import { supabase } from "@/lib/supabase/client";

export async function getPeople() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("party_person")
    .select("person_id,display_name,email")
    .order("display_name")
    .limit(100);
  return data ?? [];
}
