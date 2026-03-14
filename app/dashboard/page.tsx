import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { Notice } from "@/components/Notice";
import { getDashboardData } from "@/lib/data/dashboard";
import { dateTime } from "@/lib/data/utils";

export default async function DashboardPage() {
  const data = await getDashboardData();

  return (
    <div>
      <PageHeader title="Dashboard" description="Live counts from your current Supabase tables." />
      <Notice>
        This page is wired to your current schema. Fittings and scan sessions will light up after you run the schema-extension SQL from the earlier package.
      </Notice>
      <div className="grid">
        {data.stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="gridWide" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Recent audit events</h3>
          <ul className="list">
            {data.recentAudit.map((item: any) => (
              <li key={item.audit_event_id}>
                <strong>{item.entity_type}</strong> · {item.action_type} · {dateTime(item.occurred_at)}
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <h3>Recommended next wiring</h3>
          <ul className="list">
            <li>Protect pages with Supabase Auth session checks</li>
            <li>Add search params and saved filters</li>
            <li>Turn Asset Library into TanStack Table</li>
            <li>Add PDF exports for pull lists</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
