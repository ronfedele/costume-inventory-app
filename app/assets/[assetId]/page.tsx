import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getAssetDetail } from "@/lib/data/assets";
import { boolLabel, currency, dateTime } from "@/lib/data/utils";

export default async function AssetDetailPage({ params }: { params: Promise<{ assetId: string }> }) {
  const { assetId } = await params;
  const data = await getAssetDetail(assetId);

  return (
    <div>
      <PageHeader
        title={data.asset.title}
        description={`${data.asset.public_asset_code} · ${data.asset.asset_type}`}
        actions={<Link href={`/assets/${assetId}/edit`} className="buttonLike">Edit asset</Link>}
      />
      <div className="gridWide">
        <div className="card">
          <h3>Summary</h3>
          <ul className="list">
            <li><strong>Site:</strong> {data.asset.site?.site_name ?? "—"}</li>
            <li><strong>Location:</strong> {data.asset.location?.location_name ?? "—"}</li>
            <li><strong>Condition:</strong> {data.asset.condition_status}</li>
            <li><strong>Lifecycle:</strong> {data.asset.lifecycle_status}</li>
            <li><strong>Borrowable:</strong> {boolLabel(data.asset.borrowable_flag)}</li>
            <li><strong>Replacement value:</strong> {currency(data.asset.replacement_value)}</li>
            <li><strong>Description:</strong> {data.asset.description ?? "—"}</li>
          </ul>
        </div>
        <div className="card">
          <h3>Specialized detail</h3>
          {data.costume ? (
            <ul className="list">
              <li><strong>Garment type:</strong> {data.costume.garment_type ?? "—"}</li>
              <li><strong>Size:</strong> {data.costume.size_label ?? "—"}</li>
              <li><strong>Primary color:</strong> {data.costume.color_primary ?? "—"}</li>
              <li><strong>Era:</strong> {data.costume.period_style ?? "—"}</li>
              <li><strong>Dry clean only:</strong> {boolLabel(data.costume.dry_clean_only_flag)}</li>
            </ul>
          ) : data.propItem ? (
            <ul className="list">
              <li><strong>Prop category:</strong> {data.propItem.prop_category ?? "—"}</li>
              <li><strong>Set piece:</strong> {boolLabel(data.propItem.set_piece_flag)}</li>
              <li><strong>Functional:</strong> {boolLabel(data.propItem.functional_flag)}</li>
              <li><strong>Fragile:</strong> {boolLabel(data.propItem.fragile_flag)}</li>
            </ul>
          ) : (
            <p className="smallMuted">No specialized child record found for this asset.</p>
          )}
        </div>
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Tag type", "Value", "Barcode", "QR", "Active"]}
          rows={data.tags.map((row: any) => [row.tag_type, row.tag_value, row.barcode_value ?? "—", row.qr_value ?? "—", boolLabel(row.active_flag)])}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Uploaded", "Type", "Caption", "URI"]}
          rows={data.media.map((row: any) => [dateTime(row.uploaded_at), row.media_type, row.caption ?? "—", row.storage_uri])}
        />
      </div>
      <div style={{ marginTop: 16 }}>
        <DataTable
          columns={["Moved at", "From", "To", "Notes"]}
          rows={data.history.map((row: any) => [dateTime(row.moved_at), row.from_location?.location_name ?? "—", row.to_location?.location_name ?? "—", row.notes ?? "—"])}
        />
      </div>
    </div>
  );
}
