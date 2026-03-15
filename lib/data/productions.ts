import { supabase } from "@/lib/supabase/client";

export async function getProductions() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("production")
    .select("production_id,production_name,production_type,status,opening_date,closing_date")
    .order("created_at", { ascending: false })
    .limit(100);
  return data ?? [];
}
