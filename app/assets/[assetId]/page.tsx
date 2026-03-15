import { PageShell } from "@/components/PageShell";
import { getAssetById } from "@/lib/data/assets";

export default async function AssetDetailPage({
  params,
}: {
  params: Promise<{ assetId: string }>;
}) {
  const { assetId } = await params;
  const asset = await getAssetById(assetId);

  return (
    <PageShell title="Asset Detail" description="Single asset record view.">
      <pre>{JSON.stringify(asset, null, 2)}</pre>
    </PageShell>
  );
}
