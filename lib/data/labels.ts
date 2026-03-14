import { getSupabaseClient } from "@/lib/supabase/client";

export async function getLabels() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("asset_tag")
    .select(`asset_tag_id,tag_type,tag_value,barcode_value,qr_value,active_flag,created_at,asset:asset_id(title,public_asset_code,asset_type)`) 
    .order("created_at", { ascending: false })
    .limit(100);
  if (error) throw error;
  return data ?? [];
}
