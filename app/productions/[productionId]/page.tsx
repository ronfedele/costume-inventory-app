import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default async function ProductionDetailPage({
  params,
}: {
  params: Promise<{ productionId: string }>;
}) {
  const { productionId } = await params;

  return (
    <PageShell title={`Production ${productionId}`} description="Production detail hub.">
      <ul>
        <li><Link href={`/productions/${productionId}/assignments`}>Assignments</Link></li>
        <li><Link href={`/productions/${productionId}/pull-lists`}>Pull Lists</Link></li>
        <li><Link href={`/productions/${productionId}/dashboards`}>Dashboards</Link></li>
      </ul>
    </PageShell>
  );
}
