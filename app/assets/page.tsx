import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DataTablePlaceholder } from "@/components/DataTablePlaceholder";
import { sampleColumns, sampleRows } from "@/lib/mock-data";

export default function AssetsPage() {
  return (
    <div>
      <PageHeader
        title="Asset Library"
        description="Search, filter, edit, duplicate, upload media, and manage barcode labels."
        actions={<Link href="/assets/new" className="buttonLike">New asset</Link>}
      />
      <div className="card" style={{ marginBottom: 16 }}>
        <strong>Starter features to implement</strong>
        <div className="badgeRow">
          <span className="badge">Saved filters</span>
          <span className="badge">Bulk edit</span>
          <span className="badge">Duplicate record</span>
          <span className="badge">Media upload</span>
          <span className="badge">Quick condition update</span>
          <span className="badge">Barcode/QR label view</span>
        </div>
      </div>
      <DataTablePlaceholder columns={sampleColumns} rows={sampleRows} />
    </div>
  );
}
