import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Production Planner" description="Productions, assignments, pull lists, and readiness dashboards." />
      <SectionLinks items={[
        { href: "/productions/sample-production", label: "Production Detail", note: "View one production" },
        { href: "/productions/sample-production/assignments", label: "Assignments", note: "Assets and ensembles by role or cast" },
        { href: "/productions/sample-production/pull-lists", label: "Pull Lists", note: "Printable costume and prop pulls" },
        { href: "/productions/sample-production/dashboards", label: "Dashboards", note: "Production readiness metrics" }
      ]} />
      
    </div>
  );
}
