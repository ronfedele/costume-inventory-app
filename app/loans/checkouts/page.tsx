import { PageShell } from "@/components/PageShell";

export default function LoanCheckoutsPage() {
  return (
    <PageShell title="Checkouts" description="Record outbound items, due dates, and conditions out.">
      <p>Connect this page to loan_transaction and loan_transaction_line.</p>
    </PageShell>
  );
}
