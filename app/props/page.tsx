import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Props & Set Pieces" description="Manage rehearsal props, scenic/furniture classification, breakaway items, and safety flags." />
      <SectionLinks items={[
        { href: "/props/pulls", label: "Pull Lists", note: "Prepare prop pull lists by production or scene" }
      ]} />
      <div className="card" style={{ marginTop: 16 }}>
        <div className="badgeRow">
          <span className="badge">Rehearsal prop</span>
          <span className="badge">Breakaway</span>
          <span className="badge">Weapon-lookalike</span>
          <span className="badge">Furniture</span>
          <span className="badge">Scenic</span>
        </div>
      </div>
    </div>
  );
}
