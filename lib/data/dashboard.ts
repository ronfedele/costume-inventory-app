import { supabase } from "@/lib/supabase/client";

export async function getDashboardSummary() {
  if (!supabase) {
    return {
      assets: 0,
      productions: 0,
      people: 0,
      openLoanRequests: 0,
      note: "Supabase env vars not configured yet.",
    };
  }

  const [assets, productions, people, loanRequests] = await Promise.all([
    supabase.from("asset").select("*", { count: "exact", head: true }),
    supabase.from("production").select("*", { count: "exact", head: true }),
    supabase.from("party_person").select("*", { count: "exact", head: true }),
    supabase
      .from("loan_request")
      .select("*", { count: "exact", head: true })
      .neq("request_status", "closed"),
  ]);

  return {
    assets: assets.count ?? 0,
    productions: productions.count ?? 0,
    people: people.count ?? 0,
    openLoanRequests: loanRequests.count ?? 0,
    note: "",
  };
}
