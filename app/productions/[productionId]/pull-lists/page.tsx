import { PageHeader } from "@/components/PageHeader";

export default async function ProductionPullListsPage({ params }: { params: Promise<{ productionId: string }> }) {
  const { productionId } = await params;

  return (
    <div>
      <PageHeader title={`Pull Lists for ${productionId}`} description="Printable costume and prop pull list placeholders." />
      <div className="card"><p>TODO_SUPABASE: Add filters for character, cast member, scene, quick-change, and location.</p></div>
    </div>
  );
}
