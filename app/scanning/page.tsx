import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Labels & Scanning" description="Barcode sessions, scan exceptions, missing item reports, and label reprints." />
      <SectionLinks items={[
        { href: "/scanning/sessions", label: "Scan Sessions", note: "View current and prior scan sessions" },
        { href: "/labels", label: "Labels", note: "Print and reprint barcode/QR labels" }
      ]} />
      
    </div>
  );
}
