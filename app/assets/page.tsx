import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getAssets } from "@/lib/data/assets";
import { boolLabel, currency } from "@/lib/data/utils";

export default async function AssetsPage({ searchParams }: { searchParams?: Promise<{ q?: string }> }) {
  const params = (await searchParams) ?? {};
  const assets = await getAssets(params.q);

  return (
    <div>
      <PageHeader
        title="Asset Library"
        description="Live asset records with site, location, tag, and condition data."
        actions={<Link href="/assets/new" className="buttonLike">New asset</Link>}
      />
      <div className="card" style={{ marginBottom: 16 }}>
        <form method="GET" style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <input name="q" defaultValue={params.q ?? ""} placeholder="Search title, code, or type" style={{ padding: 10, borderRadius: 10, border: "1px solid #cbd5e1", minWidth: 280 }} />
          <button className="buttonLike" type="submit">Search</button>
        </form>
      </div>
      <DataTable
        columns={["Code", "Title", "Type", "Site", "Location", "Condition", "Lifecycle", "Borrowable", "Replacement", "Tag"]}
        rows={assets.map((row: any) => [
          <Link key={`${row.asset_id}-link`} href={`/assets/${row.asset_id}`}>{row.public_asset_code}</Link>,
          row.title,
          row.asset_type,
          row.site?.site_name ?? "—",
          row.location?.location_name ?? "—",
          row.condition_status,
          row.lifecycle_status,
          boolLabel(row.borrowable_flag),
          currency(row.replacement_value),
          row.asset_tag?.[0]?.tag_value ?? "—",
        ])}
      />
    </div>
  );
}
