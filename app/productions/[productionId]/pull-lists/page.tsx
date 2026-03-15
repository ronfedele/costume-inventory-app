import { PageShell } from "@/components/PageShell";

export default async function ProductionPullListsPage({
  params,
}: {
  params: Promise<{ productionId: string }>;
}) {
  const { productionId } = await params;

  return (
    <PageShell title="Production Pull Lists" description={`Pull lists for ${productionId}.`}>
      <p>Generate costume and prop pull sheets here.</p>
    </PageShell>
  );
}
