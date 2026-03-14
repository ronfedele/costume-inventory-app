import { getSupabaseClient } from "@/lib/supabase/client";

export async function getProductions() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("production")
    .select(`production_id,production_name,production_type,season_name,opening_date,closing_date,status,site:site_id(site_name)`) 
    .order("opening_date", { ascending: false, nullsFirst: false })
    .limit(40);

  if (error) throw error;
  return data ?? [];
}

export async function getProductionDetail(productionId: string) {
  const supabase = getSupabaseClient();
  const [production, roles, assetAssignments, ensembleAssignments, loanRequests] = await Promise.all([
    supabase.from("production").select(`*,site:site_id(site_name,site_code)`).eq("production_id", productionId).single(),
    supabase
      .from("production_role")
      .select(`production_role_id,role_name,billing_order,cast_assignment(cast_assignment_id,assignment_type,person:person_id(display_name))`)
      .eq("production_id", productionId)
      .order("billing_order", { ascending: true }),
    supabase
      .from("production_asset_assignment")
      .select(`production_asset_assignment_id,scene_reference,asset:asset_id(title,public_asset_code,asset_type,condition_status)`)
      .eq("production_id", productionId)
      .limit(50),
    supabase
      .from("production_ensemble_assignment")
      .select(`production_ensemble_assignment_id,change_number,scene_reference,ensemble:ensemble_id(ensemble_name,status)`)
      .eq("production_id", productionId)
      .limit(50),
    supabase
      .from("loan_request")
      .select(`loan_request_id,request_number,request_status,need_by_date`)
      .eq("production_id", productionId)
      .limit(20),
  ]);

  if (production.error) throw production.error;

  return {
    production: production.data,
    roles: roles.data ?? [],
    assetAssignments: assetAssignments.data ?? [],
    ensembleAssignments: ensembleAssignments.data ?? [],
    loanRequests: loanRequests.data ?? [],
  };
}
