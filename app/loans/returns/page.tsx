import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getLoanTransactions } from "@/lib/data/loans";
import { dateOnly } from "@/lib/data/utils";

export default async function LoanReturnsPage() {
  const rows = await getLoanTransactions("returned");
  return (
    <div>
      <PageHeader title="Loan Returns" description="Returned or closed transactions." />
      <DataTable
        columns={["Type", "Borrower", "Returned", "Status", "Items"]}
        rows={rows.map((row: any) => [row.transaction_type, row.borrower?.site_name ?? "—", dateOnly(row.returned_date), row.transaction_status, row.loan_transaction_line?.map((line: any) => `${line.asset?.public_asset_code ?? ""} ${line.asset?.title ?? ""}`).join(", ") || "—"])}
      />
    </div>
  );
}
