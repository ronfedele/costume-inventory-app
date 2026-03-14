import { PageHeader } from "@/components/PageHeader";

export default async function AssetEditPage({ params }: { params: Promise<{ assetId: string }> }) {
  const { assetId } = await params;
  return (
    <div>
      <PageHeader title={`Edit Asset ${assetId}`} description="Placeholder edit screen." />
      <div className="card">
        <p>TODO_FORM_SAVE: Replace this with your edit form.</p>
      </div>
    </div>
  );
}
