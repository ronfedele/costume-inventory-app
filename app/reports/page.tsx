import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Reports" description="CSV exports, PDFs, dashboards, and site summaries." />
      <SectionLinks items={[
        { href: "/reports/costume-pulls", label: "Costume Pulls", note: "Costume Pull List by Character" },
        { href: "/reports/fittings", label: "Fittings", note: "Fitting Status by Production" },
        { href: "/reports/loans", label: "Loans", note: "Borrowed Items Due This Week" },
        { href: "/reports/inventory", label: "Inventory", note: "Inventory by Storage Location" }
      ]} />
      <div className="card" style={{ marginTop: 16 }}>
        <h3>Priority reports</h3>
        <ol className="list">
          <li>Costume Pull List by Character</li>
          <li>Quick Change Plot</li>
          <li>Fitting Status by Production</li>
          <li>Borrowed Items Due This Week</li>
          <li>Assets Missing Photos</li>
          <li>Repair Queue</li>
          <li>Inventory by Storage Location</li>
          <li>Cross-Site Borrowable Inventory</li>
          <li>Prop Availability by Production</li>
          <li>Barcode Audit Discrepancy Report</li>
        </ol>
      </div>
    </div>
  );
}
