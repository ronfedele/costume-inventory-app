import { supabase } from "@/lib/supabase/client";

export async function getLoanRequests() {
  if (!supabase) return [];
  const { data } = await supabase
    .from("loan_request")
    .select("loan_request_id,request_number,request_status,event_context,need_by_date")
    .order("created_at", { ascending: false })
    .limit(100);
  return data ?? [];
}
