import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Storage Map" description="Hierarchical storage locations, moves, scan verification, and printable shelf/bin labels." />
      <SectionLinks items={[
        { href: "/locations/example-location", label: "Example Location Detail", note: "Placeholder location detail route example" }
      ]} />
      
    </div>
  );
}
