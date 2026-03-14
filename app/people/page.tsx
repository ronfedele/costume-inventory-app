import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Cast & Measurements" description="People records, structured measurements, fitting history, allergies, and sizing suggestions." />
      <SectionLinks items={[
        { href: "/measurements", label: "Measurements", note: "Measurement profile list" },
        { href: "/people/sample-person", label: "Example Person Detail", note: "Placeholder person detail route" }
      ]} />
      
    </div>
  );
}
