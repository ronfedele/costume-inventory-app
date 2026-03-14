import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getProductions } from "@/lib/data/productions";
import { dateOnly } from "@/lib/data/utils";

export default async function ProductionsPage() {
  const productions = await getProductions();

  return (
    <div>
      <PageHeader title="Production Planner" description="Live productions from the current schema." />
      <DataTable
        columns={["Production", "Type", "Site", "Season", "Open", "Close", "Status"]}
        rows={productions.map((row: any) => [
          <Link key={row.production_id} href={`/productions/${row.production_id}`}>{row.production_name}</Link>,
          row.production_type,
          row.site?.site_name ?? "—",
          row.season_name ?? "—",
          dateOnly(row.opening_date),
          dateOnly(row.closing_date),
          row.status,
        ])}
      />
    </div>
  );
}
