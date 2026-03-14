import { getSupabaseClient } from "@/lib/supabase/client";

export async function getCostumes() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("costume_piece")
    .select(`
      asset_id,
      costume_category,
      garment_type,
      size_label,
      color_primary,
      period_style,
      fabric,
      dry_clean_only_flag,
      asset:asset_id(title,public_asset_code,condition_status,lifecycle_status,borrowable_flag,site_id,current_location_id),
      location:asset!inner(current_location_id(location_name)),
      site:asset!inner(site_id(site_name))
    `)
    .limit(50);

  if (error) throw error;
  return data ?? [];
}
