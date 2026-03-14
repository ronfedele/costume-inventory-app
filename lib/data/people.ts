import { getSupabaseClient } from "@/lib/supabase/client";

export async function getPeople() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("party_person")
    .select(`person_id,display_name,email,phone,allergies_notes,active_flag,home_site:home_site_id(site_name)`) 
    .order("display_name")
    .limit(100);

  if (error) throw error;
  return data ?? [];
}

export async function getPersonDetail(personId: string) {
  const supabase = getSupabaseClient();
  const [person, assignments] = await Promise.all([
    supabase.from("party_person").select(`*,home_site:home_site_id(site_name,site_code)`).eq("person_id", personId).single(),
    supabase
      .from("cast_assignment")
      .select(`cast_assignment_id,assignment_type,production_role:production_role_id(role_name,production:production_id(production_name,status))`)
      .eq("person_id", personId)
      .limit(50),
  ]);

  if (person.error) throw person.error;
  return { person: person.data, assignments: assignments.data ?? [] };
}
