import { PageHeader } from "@/components/PageHeader";
import { StatCard } from "@/components/StatCard";
import { dashboardStats, recentActivity } from "@/lib/mock-data";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="Dashboard" description="Quick health of assets, loans, fittings, repairs, and scans." />
      <div className="grid">
        {dashboardStats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      <div className="gridWide" style={{ marginTop: 16 }}>
        <div className="card">
          <h3>Priority widgets to wire first</h3>
          <ul className="list">
            <li>Asset counts by site and type</li>
            <li>Open loans due soon</li>
            <li>Fittings completion</li>
            <li>Items missing photos</li>
            <li>Assets in repair</li>
            <li>Recent scan sessions</li>
            <li>Recent audit events</li>
          </ul>
        </div>
        <div className="card">
          <h3>Recent activity</h3>
          <ul className="list">
            {recentActivity.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </div>
    </div>
  );
}
