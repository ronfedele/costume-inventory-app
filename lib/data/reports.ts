import { getSupabaseClient } from "@/lib/supabase/client";

export async function getReportSnapshots() {
  const supabase = getSupabaseClient();
  const [borrowable, missingPhotos, byLocation, byType] = await Promise.all([
    supabase.from("asset").select("asset_id, asset_type, title, public_asset_code").eq("borrowable_flag", true).limit(20),
    supabase.from("asset").select("asset_id,title,public_asset_code,asset_media(media_id)").limit(100),
    supabase.from("storage_location").select("location_id,location_name,location_code,site:site_id(site_name)").limit(50),
    supabase.from("asset").select("asset_type").limit(500),
  ]);

  const typeCounts = Object.entries((byType.data ?? []).reduce((acc: Record<string, number>, row: any) => {
    acc[row.asset_type] = (acc[row.asset_type] ?? 0) + 1;
    return acc;
  }, {})).map(([asset_type, count]) => ({ asset_type, count }));

  const missingPhotoRows = (missingPhotos.data ?? []).filter((row: any) => !row.asset_media || row.asset_media.length === 0);

  return {
    borrowable: borrowable.data ?? [],
    missingPhotoRows,
    byLocation: byLocation.data ?? [],
    byType: typeCounts.sort((a, b) => Number(b.count) - Number(a.count)),
  };
}
