import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";
import { mainNav } from "@/lib/page-config";

export default function HomePage() {
  return (
    <div className="hero">
      <PageHeader
        title="Theatre Database Frontend"
        description="Starter routes and components for inventory, fittings, production planning, scanning, and reporting."
        actions={<Link className="buttonLike" href="/dashboard">Open dashboard</Link>}
      />
      <div className="notice">Merge these files into your existing Next.js repo, commit to GitHub, and let Vercel redeploy.</div>
      <SectionLinks items={mainNav} />
    </div>
  );
}
