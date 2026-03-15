import { PageShell } from "@/components/PageShell";
import { SimpleTable } from "@/components/SimpleTable";
import { getCostumes } from "@/lib/data/costumes";

export default async function CostumesPage() {
  const costumes = await getCostumes();

  return (
    <PageShell title="Costume Shop" description="Costume-specific inventory view.">
      <SimpleTable
        headers={["Title", "Garment Type", "Size", "Primary Color", "Period Style"]}
        rows={costumes.map((c: any) => [
          c.title ?? "",
          c.costume_piece?.garment_type ?? "",
          c.costume_piece?.size_label ?? "",
          c.costume_piece?.color_primary ?? "",
          c.costume_piece?.period_style ?? "",
        ])}
      />
    </PageShell>
  );
}
