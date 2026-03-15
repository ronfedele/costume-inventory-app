import { PageShell } from "@/components/PageShell";

export default function ReportLoansPage() {
  return (
    <PageShell title="Loan Reports" description="Overdue items, due this week, and damage/fees.">
      <p>Connect summaries from loan_request, loan_agreement, and loan_transaction.</p>
    </PageShell>
  );
}
