import { PageShell } from "@/components/PageShell";
import { SimpleTable } from "@/components/SimpleTable";
import { getLoanRequests } from "@/lib/data/loans";

export default async function LoanRequestsPage() {
  const rows = await getLoanRequests();

  return (
    <PageShell title="Loan Requests" description="Request workflow for cross-site borrowing.">
      <SimpleTable
        headers={["Request #", "Status", "Event", "Need By"]}
        rows={rows.map((r: any) => [
          r.request_number ?? "",
          r.request_status ?? "",
          r.event_context ?? "",
          r.need_by_date ?? "",
        ])}
      />
    </PageShell>
  );
}
