import { PageHeader } from "@/components/PageHeader";

export default function ScanSessionsPage() {
  return (
    <div>
      <PageHeader title="Scan Sessions" description="Recent cycle counts and scan exception tracking." />
      <div className="card">
        <ul className="list">
          <li>Start scan session</li>
          <li>Mobile camera scanning</li>
          <li>Wrong-location report</li>
          <li>Missing item report</li>
        </ul>
      </div>
    </div>
  );
}
