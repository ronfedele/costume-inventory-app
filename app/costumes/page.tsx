import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Costume Shop" description="Costume-specific filters, color fields, size/era filters, alterations, and fitting workflows." />
      <SectionLinks items={[
        { href: "/costumes/fittings", label: "Fittings", note: "Run fitting sessions and record results" },
        { href: "/costumes/ensembles", label: "Ensembles", note: "Group multiple garments into coordinated looks" }
      ]} />
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Suggested filters</h3>
        <div className="badgeRow">
          <span className="badge">Primary color</span>
          <span className="badge">Secondary color</span>
          <span className="badge">Accent color</span>
          <span className="badge">Size label</span>
          <span className="badge">Era / period</span>
          <span className="badge">Garment type</span>
          <span className="badge">Alteration status</span>
        </div>
      </div>
    </div>
  );
}
