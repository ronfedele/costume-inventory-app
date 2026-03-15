import { PageShell } from "@/components/PageShell";

export default async function LocationDetailPage({
  params,
}: {
  params: Promise<{ locationId: string }>;
}) {
  const { locationId } = await params;

  return (
    <PageShell title={`Location ${locationId}`} description="Single storage location page.">
      <p>Show sublocations and contents here.</p>
    </PageShell>
  );
}
