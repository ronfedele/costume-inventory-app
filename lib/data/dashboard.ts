import { getSupabaseClient } from "@/lib/supabase/client";

export async function getDashboardData() {
  const supabase = getSupabaseClient();

  const [
    assetCount,
    siteCount,
    productionCount,
    openLoanCount,
    assetsInRepair,
    missingPhotos,
    recentAudit,
  ] = await Promise.all([
    supabase.from("asset").select("asset_id", { count: "exact", head: true }),
    supabase.from("site").select("site_id", { count: "exact", head: true }),
    supabase.from("production").select("production_id", { count: "exact", head: true }),
    supabase.from("loan_transaction").select("loan_transaction_id", { count: "exact", head: true }).eq("transaction_status", "open"),
    supabase.from("asset").select("asset_id", { count: "exact", head: true }).in("condition_status", ["repair", "needs_repair", "damaged"]),
    supabase.from("asset").select("asset_id, asset_media(media_id)").limit(200),
    supabase.from("audit_event").select("audit_event_id, entity_type, action_type, occurred_at").order("occurred_at", { ascending: false }).limit(8),
  ]);

  const missingPhotoCount = missingPhotos.data?.filter((row: any) => !row.asset_media || row.asset_media.length === 0).length ?? 0;

  return {
    stats: [
      { label: "Assets", value: String(assetCount.count ?? 0), note: "All records in asset" },
      { label: "Sites", value: String(siteCount.count ?? 0), note: "Organizations / schools" },
      { label: "Productions", value: String(productionCount.count ?? 0), note: "Current and past shows" },
      { label: "Open loans", value: String(openLoanCount.count ?? 0), note: "loan_transaction where status=open" },
      { label: "Assets in repair", value: String(assetsInRepair.count ?? 0), note: "Condition status flagged for repair" },
      { label: "Assets missing photos", value: String(missingPhotoCount), note: "From sample of first 200 assets" },
    ],
    recentAudit: recentAudit.data ?? [],
  };
}
