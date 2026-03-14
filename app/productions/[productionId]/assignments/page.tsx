import { PageHeader } from "@/components/PageHeader";

export default async function ProductionAssignmentsPage({ params }: { params: Promise<{ productionId: string }> }) {
  const { productionId } = await params;

  return (
    <div>
      <PageHeader title={`Assignments for ${productionId}`} description="Assigned vs unassigned assets, ensembles, and roles." />
      <div className="card">
        <p>TODO_SUPABASE: Join production, roles, cast assignments, production_asset_assignment, and production_ensemble_assignment.</p>
      </div>
    </div>
  );
}
