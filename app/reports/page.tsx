import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function ReportsPage() {
  return (
    <PageShell title="Reports" description="Core operational and theatre-specific reports.">
      <ul>
        <li><Link href="/reports/costume-pulls">Costume Pull Lists</Link></li>
        <li><Link href="/reports/fittings">Fitting Reports</Link></li>
        <li><Link href="/reports/loans">Loan Reports</Link></li>
        <li><Link href="/reports/inventory">Inventory Reports</Link></li>
      </ul>
    </PageShell>
  );
}
