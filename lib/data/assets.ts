import { getSupabaseClient } from "@/lib/supabase/client";

export async function getAssets(search?: string) {
  const supabase = getSupabaseClient();
  let query = supabase
    .from("asset")
    .select(`
      asset_id,
      public_asset_code,
      title,
      asset_type,
      lifecycle_status,
      condition_status,
      borrowable_flag,
      replacement_value,
      site:site_id(site_name,site_code),
      location:current_location_id(location_name,location_code),
      asset_tag(tag_value)
    `)
    .order("updated_at", { ascending: false })
    .limit(50);

  if (search) {
    query = query.or(`title.ilike.%${search}%,public_asset_code.ilike.%${search}%,asset_type.ilike.%${search}%`);
  }

  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}

export async function getAssetDetail(assetId: string) {
  const supabase = getSupabaseClient();
  const [asset, media, tags, history, costume, propItem] = await Promise.all([
    supabase
      .from("asset")
      .select(`
        *,
        site:site_id(site_name,site_code),
        location:current_location_id(location_name,location_code)
      `)
      .eq("asset_id", assetId)
      .single(),
    supabase.from("asset_media").select("*").eq("asset_id", assetId).order("sort_order"),
    supabase.from("asset_tag").select("*").eq("asset_id", assetId).order("created_at", { ascending: false }),
    supabase
      .from("asset_location_history")
      .select(`asset_location_history_id,moved_at,notes,from_location:from_location_id(location_name),to_location:to_location_id(location_name)`)
      .eq("asset_id", assetId)
      .order("moved_at", { ascending: false })
      .limit(10),
    supabase.from("costume_piece").select("*").eq("asset_id", assetId).maybeSingle(),
    supabase.from("prop_set_item").select("*").eq("asset_id", assetId).maybeSingle(),
  ]);

  if (asset.error) throw asset.error;

  return {
    asset: asset.data,
    media: media.data ?? [],
    tags: tags.data ?? [],
    history: history.data ?? [],
    costume: costume.data,
    propItem: propItem.data,
  };
}
