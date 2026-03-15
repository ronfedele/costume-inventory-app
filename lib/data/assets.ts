import { supabase } from "@/lib/supabase/client";

export async function getAssets() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("asset")
    .select("asset_id,title,asset_type,lifecycle_status,condition_status,public_asset_code,borrowable_flag")
    .order("created_at", { ascending: false })
    .limit(100);
  return data ?? [];
}

export async function getAssetById(assetId: string) {
  if (!supabase) return null;
  const { data } = await supabase
    .from("asset")
    .select("*")
    .eq("asset_id", assetId)
    .single();
  return data;
}
