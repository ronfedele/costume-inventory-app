import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SimpleTable } from "@/components/SimpleTable";
import { getProductions } from "@/lib/data/productions";

export default async function ProductionsPage() {
  const productions = await getProductions();

  return (
    <PageShell title="Production Planner" description="Browse productions and launch planning views.">
      <SimpleTable
        headers={["Production", "Type", "Status", "Open"]}
        rows={productions.map((p: any) => [
          p.production_name ?? "",
          p.production_type ?? "",
          p.status ?? "",
          <Link key={p.production_id} href={`/productions/${p.production_id}`}>Open</Link>,
        ])}
      />
    </PageShell>
  );
}
