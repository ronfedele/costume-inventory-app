import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getReportSnapshots } from "@/lib/data/reports";

export default async function ReportsPage() {
  const data = await getReportSnapshots();

  return (
    <div>
      <PageHeader title="Reports" description="Live summary snapshots based on your current schema." />
      <div className="gridWide">
        <DataTable
          columns={["Asset type", "Count"]}
          rows={data.byType.map((row) => [row.asset_type, row.count])}
        />
        <DataTable
          columns={["Borrowable code", "Title", "Type"]}
          rows={data.borrowable.map((row: any) => [row.public_asset_code, row.title, row.asset_type])}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Missing photo code", "Title"]}
          rows={data.missingPhotoRows.slice(0, 25).map((row: any) => [row.public_asset_code, row.title])}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Location", "Code", "Site"]}
          rows={data.byLocation.map((row: any) => [row.location_name, row.location_code, row.site?.site_name ?? "—"])}
        />
      </div>
    </div>
  );
}
