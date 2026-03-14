import { getSupabaseClient } from "@/lib/supabase/client";

export async function getLookups() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("lookup_value")
    .select("lookup_value_id,module_scope,lookup_group,value_code,value_label,sort_order,active_flag")
    .order("lookup_group")
    .order("sort_order");
  if (error) throw error;
  return data ?? [];
}
