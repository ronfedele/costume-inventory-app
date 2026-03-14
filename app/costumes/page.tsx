import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { Notice } from "@/components/Notice";
import { getCostumes } from "@/lib/data/costumes";
import { boolLabel } from "@/lib/data/utils";

export default async function CostumesPage() {
  const rows = await getCostumes();

  return (
    <div>
      <PageHeader title="Costume Shop" description="Costume-specific records joined to asset, site, and location." />
      <Notice>
        Secondary color, accent color, alteration workflow, and fitting workflow are ideal next additions after you run the schema-extension package.
      </Notice>
      <DataTable
        columns={["Code", "Title", "Category", "Garment", "Size", "Primary color", "Era", "Fabric", "Dry clean", "Condition"]}
        rows={rows.map((row: any) => [
          row.asset?.public_asset_code ?? "—",
          row.asset?.title ?? "—",
          row.costume_category ?? "—",
          row.garment_type ?? "—",
          row.size_label ?? "—",
          row.color_primary ?? "—",
          row.period_style ?? "—",
          row.fabric ?? "—",
          boolLabel(row.dry_clean_only_flag),
          row.asset?.condition_status ?? "—",
        ])}
      />
    </div>
  );
}
