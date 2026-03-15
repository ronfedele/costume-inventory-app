import { supabase } from "@/lib/supabase/client";

export async function getLookupValues(group?: string) {
  if (!supabase) return [];

  let query = supabase
    .from("lookup_value")
    .select("lookup_group,value_code,value_label,sort_order,active_flag")
    .order("lookup_group")
    .order("sort_order");

  if (group) {
    query = query.eq("lookup_group", group);
  }

  const { data } = await query;
  return data ?? [];
}
