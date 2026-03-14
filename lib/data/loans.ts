import { getSupabaseClient } from "@/lib/supabase/client";

export async function getLoanRequests() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("loan_request")
    .select(`loan_request_id,request_number,request_status,need_by_date,event_context,created_at,requesting_site:requesting_site_id(site_name),fulfilling_site:fulfilling_site_id(site_name),production:production_id(production_name)`) 
    .order("created_at", { ascending: false })
    .limit(50);
  if (error) throw error;
  return data ?? [];
}

export async function getLoanAgreements() {
  const supabase = getSupabaseClient();
  const { data, error } = await supabase
    .from("loan_agreement")
    .select(`loan_agreement_id,start_date,due_date,agreement_status,loan_request:loan_request_id(request_number),lender:lender_site_id(site_name),borrower:borrower_site_id(site_name)`) 
    .order("due_date", { ascending: true })
    .limit(50);
  if (error) throw error;
  return data ?? [];
}

export async function getLoanTransactions(status?: "open" | "returned") {
  const supabase = getSupabaseClient();
  let query = supabase
    .from("loan_transaction")
    .select(`loan_transaction_id,transaction_type,checkout_date,due_date,returned_date,transaction_status,lender:lender_site_id(site_name),borrower:borrower_site_id(site_name),loan_transaction_line(quantity,returned_flag,asset:asset_id(title,public_asset_code))`) 
    .order("created_at", { ascending: false })
    .limit(50);

  if (status === "open") query = query.eq("transaction_status", "open");
  if (status === "returned") query = query.not("returned_date", "is", null);
  const { data, error } = await query;
  if (error) throw error;
  return data ?? [];
}
