import { PageHeader } from "@/components/PageHeader";

export default function ProductionAssignmentsPage({ params }: { params: { productionId: string } }) {
  return (
    <div>
      <PageHeader title={`Assignments for ${params.productionId}`} description="Assigned vs unassigned assets, ensembles, and roles." />
      <div className="card">
        <p>TODO_SUPABASE: Join production, roles, cast assignments, production_asset_assignment, and production_ensemble_assignment.</p>
      </div>
    </div>
  );
}
