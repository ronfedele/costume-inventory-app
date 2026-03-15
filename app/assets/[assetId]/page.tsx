import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { getAssetDetail } from "@/lib/data/assets";

export default async function AssetDetailPage({
  params,
}: {
  params: Promise<{ assetId: string }>;
}) {
  const { assetId } = await params;
  const data = await getAssetDetail(assetId);

  if (!data?.asset) {
    return (
      <div>
        <PageHeader
          title="Asset not found"
          description={`No asset record was found for ID ${assetId}.`}
        />
        <p>The requested asset does not exist or could not be loaded.</p>
        <p>
          <Link href="/assets">Back to Asset Library</Link>
        </p>
      </div>
    );
  }

  return (
    <div>
      <PageHeader
        title={data.asset.title}
        description={`${data.asset.public_asset_code ?? ""} · ${data.asset.asset_type ?? ""}`}
        actions={
          <Link href={`/assets/${assetId}/edit`} className="buttonLike">
            Edit asset
          </Link>
        }
      />

      <div className="card">
        <p><strong>Type:</strong> {data.asset.asset_type ?? "—"}</p>
        <p><strong>Code:</strong> {data.asset.public_asset_code ?? "—"}</p>
        <p><strong>Condition:</strong> {data.asset.condition_status ?? "—"}</p>
        <p><strong>Lifecycle:</strong> {data.asset.lifecycle_status ?? "—"}</p>
        <p><strong>Description:</strong> {data.asset.description ?? "—"}</p>
      </div>
    </div>
  );
}
