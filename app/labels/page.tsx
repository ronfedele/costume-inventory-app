import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { Notice } from "@/components/Notice";
import { getLabels } from "@/lib/data/labels";
import { boolLabel, dateTime } from "@/lib/data/utils";

export default async function LabelsPage() {
  const rows = await getLabels();
  return (
    <div>
      <PageHeader title="Labels & Scanning" description="Current tag records from asset_tag." />
      <Notice>
        This route is wired to existing labels. Scan sessions, exceptions, and discrepancy reports come next after you apply the schema-extension SQL.
      </Notice>
      <DataTable
        columns={["Created", "Code", "Title", "Type", "Tag type", "Tag value", "Barcode", "QR", "Active"]}
        rows={rows.map((row: any) => [dateTime(row.created_at), row.asset?.public_asset_code ?? "—", row.asset?.title ?? "—", row.asset?.asset_type ?? "—", row.tag_type, row.tag_value, row.barcode_value ?? "—", row.qr_value ?? "—", boolLabel(row.active_flag)])}
      />
    </div>
  );
}
