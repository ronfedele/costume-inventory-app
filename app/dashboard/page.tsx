import { PageShell } from "@/components/PageShell";
import { InfoCard } from "@/components/InfoCard";
import { getDashboardSummary } from "@/lib/data/dashboard";

export default async function DashboardPage() {
  const summary = await getDashboardSummary();

  return (
    <PageShell title="Dashboard" description="Quick health of the theatre inventory system.">
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        <InfoCard label="Assets" value={summary.assets} />
        <InfoCard label="Productions" value={summary.productions} />
        <InfoCard label="People" value={summary.people} />
        <InfoCard label="Open Loan Requests" value={summary.openLoanRequests} />
      </div>
      {summary.note ? <p style={{ marginTop: 20 }}>{summary.note}</p> : null}
    </PageShell>
  );
}
