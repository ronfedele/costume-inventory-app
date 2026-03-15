import { PageShell } from "@/components/PageShell";
import { getAssetById } from "@/lib/data/assets";

export default async function AssetEditPage({
  params,
}: {
  params: Promise<{ assetId: string }>;
}) {
  const { assetId } = await params;
  const asset = await getAssetById(assetId);

  return (
    <PageShell title={`Edit Asset ${assetId}`} description="Next.js 15-safe dynamic route.">
      <p>Replace this with your real edit form.</p>
      <pre>{JSON.stringify(asset, null, 2)}</pre>
    </PageShell>
  );
}
