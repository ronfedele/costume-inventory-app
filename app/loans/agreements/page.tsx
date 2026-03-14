import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getLoanAgreements } from "@/lib/data/loans";
import { dateOnly } from "@/lib/data/utils";

export default async function LoanAgreementsPage() {
  const rows = await getLoanAgreements();
  return (
    <div>
      <PageHeader title="Loan Agreements" description="Agreement records joined to request and site names." />
      <DataTable
        columns={["Request #", "Lender", "Borrower", "Start", "Due", "Status"]}
        rows={rows.map((row: any) => [row.loan_request?.request_number ?? "—", row.lender?.site_name ?? "—", row.borrower?.site_name ?? "—", dateOnly(row.start_date), dateOnly(row.due_date), row.agreement_status])}
      />
    </div>
  );
}
