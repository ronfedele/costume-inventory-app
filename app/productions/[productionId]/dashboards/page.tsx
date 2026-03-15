import { PageShell } from "@/components/PageShell";

export default async function ProductionDashboardsPage({
  params,
}: {
  params: Promise<{ productionId: string }>;
}) {
  const { productionId } = await params;

  return (
    <PageShell title="Production Dashboard" description={`Readiness dashboard for ${productionId}.`}>
      <p>Show cast readiness, assigned vs unassigned assets, and quick-change readiness here.</p>
    </PageShell>
  );
}
