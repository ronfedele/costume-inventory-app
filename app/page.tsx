import Link from "next/link";
import { PageShell } from "@/components/PageShell";

export default function Home() {
  return (
    <PageShell
      title="Theatre Inventory System"
      description="Clean Next.js starter wired for your Supabase theatre database."
    >
      <p>Start here:</p>
      <ul>
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/assets">Asset Library</Link></li>
        <li><Link href="/costumes">Costume Shop</Link></li>
        <li><Link href="/productions">Production Planner</Link></li>
        <li><Link href="/loans/requests">Loans &amp; Borrowing</Link></li>
      </ul>
    </PageShell>
  );
}
