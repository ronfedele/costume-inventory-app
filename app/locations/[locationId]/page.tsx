import { PageHeader } from "@/components/PageHeader";

export default async function LocationDetailPage({ params }: { params: Promise<{ locationId: string }> }) {
  const { locationId } = await params;
  return (
    <div>
      <PageHeader title={`Location ${locationId}`} description="Placeholder for one location tree node." />
      <div className="grid">
        <div className="card">
          <h3>Location tree</h3>
          <p>TODO_SUPABASE: Load parent, children, and contents.</p>
        </div>
        <div className="card">
          <h3>Actions</h3>
          <ul className="list">
            <li>Move assets here</li>
            <li>Scan verify contents</li>
            <li>Print label</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
