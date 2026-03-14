import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getProductionDetail } from "@/lib/data/productions";
import { dateOnly } from "@/lib/data/utils";

export default async function ProductionDetailPage({ params }: { params: Promise<{ productionId: string }> }) {
  const { productionId } = await params;
  const data = await getProductionDetail(productionId);

  return (
    <div>
      <PageHeader title={data.production.production_name} description={`${data.production.production_type} · ${data.production.site?.site_name ?? "—"}`} />
      <div className="gridWide">
        <div className="card">
          <h3>Overview</h3>
          <ul className="list">
            <li><strong>Status:</strong> {data.production.status}</li>
            <li><strong>Season:</strong> {data.production.season_name ?? "—"}</li>
            <li><strong>Opening:</strong> {dateOnly(data.production.opening_date)}</li>
            <li><strong>Closing:</strong> {dateOnly(data.production.closing_date)}</li>
          </ul>
        </div>
        <div className="card">
          <h3>Readiness snapshot</h3>
          <ul className="list">
            <li><strong>Roles:</strong> {data.roles.length}</li>
            <li><strong>Asset assignments:</strong> {data.assetAssignments.length}</li>
            <li><strong>Ensemble assignments:</strong> {data.ensembleAssignments.length}</li>
            <li><strong>Loan requests:</strong> {data.loanRequests.length}</li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Role", "Billing", "Assigned cast"]}
          rows={data.roles.map((row: any) => [row.role_name, row.billing_order ?? "—", row.cast_assignment?.map((c: any) => c.person?.display_name).join(", ") || "—"])}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Assigned asset", "Type", "Condition", "Scene"]}
          rows={data.assetAssignments.map((row: any) => [row.asset?.title ?? "—", row.asset?.asset_type ?? "—", row.asset?.condition_status ?? "—", row.scene_reference ?? "—"])}
        />
      </div>
    </div>
  );
}
