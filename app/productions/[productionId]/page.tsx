import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function ProductionDetailPage({ params }: { params: { productionId: string } }) {
  return (
    <div>
      <PageHeader title={`Production ${params.productionId}`} description="Production overview placeholder." />
      <SectionLinks items={[
        { href: `/productions/${params.productionId}/assignments`, label: "Assignments", note: "Assets, roles, cast assignments, ensembles" },
        { href: `/productions/${params.productionId}/pull-lists`, label: "Pull Lists", note: "Printable costume and prop pulls" },
        { href: `/productions/${params.productionId}/dashboards`, label: "Dashboards", note: "Readiness metrics and alerts" }
      ]} />
    </div>
  );
}
