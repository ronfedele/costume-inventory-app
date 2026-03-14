import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { Notice } from "@/components/Notice";
import { getPersonDetail } from "@/lib/data/people";

export default async function PersonDetailPage({ params }: { params: Promise<{ personId: string }> }) {
  const { personId } = await params;
  const data = await getPersonDetail(personId);

  return (
    <div>
      <PageHeader title={data.person.display_name} description="Person detail and current cast assignments." />
      <div className="gridWide">
        <div className="card">
          <h3>Profile</h3>
          <ul className="list">
            <li><strong>Email:</strong> {data.person.email ?? "—"}</li>
            <li><strong>Phone:</strong> {data.person.phone ?? "—"}</li>
            <li><strong>Home site:</strong> {data.person.home_site?.site_name ?? "—"}</li>
            <li><strong>Allergies:</strong> {data.person.allergies_notes ?? "—"}</li>
          </ul>
        </div>
        <div className="card">
          <h3>Measurements</h3>
          <pre style={{ whiteSpace: "pre-wrap", margin: 0 }}>{JSON.stringify(data.person.measurements_json, null, 2) || "No measurements_json stored."}</pre>
        </div>
      </div>
      <Notice>
        A dedicated structured measurement profile table is still recommended for production-quality fitting workflows.
      </Notice>
      <DataTable
        columns={["Production", "Role", "Assignment type"]}
        rows={data.assignments.map((row: any) => [row.production_role?.production?.production_name ?? "—", row.production_role?.role_name ?? "—", row.assignment_type])}
      />
    </div>
  );
}
