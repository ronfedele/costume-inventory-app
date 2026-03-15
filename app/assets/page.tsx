import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SimpleTable } from "@/components/SimpleTable";
import { getAssets } from "@/lib/data/assets";

export default async function AssetsPage() {
  const assets = await getAssets();

  return (
    <PageShell title="Asset Library" description="Browse and review assets from the asset table.">
      <p><Link href="/assets/new">Create New Asset</Link></p>
      <SimpleTable
        headers={["Title", "Type", "Code", "Condition", "Lifecycle", "Borrowable", "Edit"]}
        rows={assets.map((a: any) => [
          a.title ?? "",
          a.asset_type ?? "",
          a.public_asset_code ?? "",
          a.condition_status ?? "",
          a.lifecycle_status ?? "",
          a.borrowable_flag ? "Yes" : "No",
          <Link key={a.asset_id} href={`/assets/${a.asset_id}/edit`}>Edit</Link>,
        ])}
      />
    </PageShell>
  );
}
