import { PageHeader } from "@/components/PageHeader";

export default function ProductionPullListsPage({ params }: { params: { productionId: string } }) {
  return (
    <div>
      <PageHeader title={`Pull Lists for ${params.productionId}`} description="Printable costume and prop pull list placeholders." />
      <div className="card"><p>TODO_SUPABASE: Add filters for character, cast member, scene, quick-change, and location.</p></div>
    </div>
  );
}
