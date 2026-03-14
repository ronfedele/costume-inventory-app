import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getLoanRequests } from "@/lib/data/loans";
import { dateOnly } from "@/lib/data/utils";

export default async function LoanRequestsPage() {
  const rows = await getLoanRequests();
  return (
    <div>
      <PageHeader title="Loan Requests" description="Current request workflow records from loan_request." />
      <DataTable
        columns={["Request #", "Status", "Need by", "Requesting site", "Fulfilling site", "Production", "Context"]}
        rows={rows.map((row: any) => [row.request_number, row.request_status, dateOnly(row.need_by_date), row.requesting_site?.site_name ?? "—", row.fulfilling_site?.site_name ?? "—", row.production?.production_name ?? "—", row.event_context ?? "—"])}
      />
    </div>
  );
}
