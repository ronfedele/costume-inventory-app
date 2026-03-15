import { PageShell } from "@/components/PageShell";

export default async function ProductionAssignmentsPage({
  params,
}: {
  params: Promise<{ productionId: string }>;
}) {
  const { productionId } = await params;

  return (
    <PageShell title="Production Assignments" description={`Assignment board for ${productionId}.`}>
      <p>Use production_asset_assignment and production_ensemble_assignment here.</p>
    </PageShell>
  );
}
