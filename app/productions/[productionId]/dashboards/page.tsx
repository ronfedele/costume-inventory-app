import { PageHeader } from "@/components/PageHeader";

export default async function ProductionDashboardPage({ params }: { params: Promise<{ productionId: string }> }) {
  const { productionId } = await params;

  return (
    <div>
      <PageHeader title={`Production Dashboard: ${productionId}`} description="Cast readiness, assigned vs unassigned, borrowed items, and quick-change readiness." />
      <div className="grid">
        <div className="card"><h3>Cast readiness</h3><p>Placeholder widget</p></div>
        <div className="card"><h3>Assignments complete</h3><p>Placeholder widget</p></div>
        <div className="card"><h3>Borrowed items</h3><p>Placeholder widget</p></div>
        <div className="card"><h3>Quick-change readiness</h3><p>Placeholder widget</p></div>
      </div>
    </div>
  );
}
