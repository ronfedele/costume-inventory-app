import { supabase } from "@/lib/supabase/client";

export async function getCostumes() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("asset")
    .select(`
      asset_id,title,asset_type,lifecycle_status,condition_status,public_asset_code,
      costume_piece(asset_id,garment_type,size_label,color_primary,period_style)
    `)
    .eq("asset_type", "costume")
    .limit(100);

  return data ?? [];
}
