import { PageHeader } from "@/components/PageHeader";

export default function ProductionDashboardPage({ params }: { params: { productionId: string } }) {
  return (
    <div>
      <PageHeader title={`Production Dashboard: ${params.productionId}`} description="Cast readiness, assigned vs unassigned, borrowed items, and quick-change readiness." />
      <div className="grid">
        <div className="card"><h3>Cast readiness</h3><p>Placeholder widget</p></div>
        <div className="card"><h3>Assignments complete</h3><p>Placeholder widget</p></div>
        <div className="card"><h3>Borrowed items</h3><p>Placeholder widget</p></div>
        <div className="card"><h3>Quick-change readiness</h3><p>Placeholder widget</p></div>
      </div>
    </div>
  );
}
