import { PageShell } from "@/components/PageShell";

export default async function PersonDetailPage({
  params,
}: {
  params: Promise<{ personId: string }>;
}) {
  const { personId } = await params;

  return (
    <PageShell title={`Person ${personId}`} description="Person profile, measurements, and fitting history.">
      <p>Connect this to party_person and measurement/fitting extensions.</p>
    </PageShell>
  );
}
