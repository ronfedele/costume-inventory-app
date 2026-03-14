import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getLoanTransactions } from "@/lib/data/loans";
import { dateOnly } from "@/lib/data/utils";

export default async function LoanCheckoutsPage() {
  const rows = await getLoanTransactions("open");
  return (
    <div>
      <PageHeader title="Loan Checkouts" description="Open transactions from loan_transaction." />
      <DataTable
        columns={["Type", "Lender", "Borrower", "Checkout", "Due", "Status", "Items"]}
        rows={rows.map((row: any) => [row.transaction_type, row.lender?.site_name ?? "—", row.borrower?.site_name ?? "—", dateOnly(row.checkout_date), dateOnly(row.due_date), row.transaction_status, row.loan_transaction_line?.map((line: any) => line.asset?.title).join(", ") || "—"])}
      />
    </div>
  );
}
