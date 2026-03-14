import { PageHeader } from "@/components/PageHeader";

export default function AssetEditPage({ params }: { params: { assetId: string } }) {
  return (
    <div>
      <PageHeader title={`Edit Asset ${params.assetId}`} description="Placeholder edit screen." />
      <div className="card">
        <p>TODO_FORM_SAVE: Replace this with your edit form.</p>
      </div>
    </div>
  );
}
