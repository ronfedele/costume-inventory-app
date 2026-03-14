import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";

export default function AssetDetailPage({ params }: { params: { assetId: string } }) {
  return (
    <div>
      <PageHeader
        title={`Asset ${params.assetId}`}
        description="Detail placeholder for one asset record."
        actions={<Link href={`/assets/${params.assetId}/edit`} className="buttonLike">Edit asset</Link>}
      />
      <div className="gridWide">
        <div className="card">
          <h3>Summary</h3>
          <p>TODO_SUPABASE: Load asset detail, media, tag, current location, history, and specialized child record.</p>
        </div>
        <div className="card">
          <h3>Quick actions</h3>
          <ul className="list">
            <li>Update condition</li>
            <li>Move location</li>
            <li>Print label</li>
            <li>Upload photos</li>
            <li>Assign to production</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
