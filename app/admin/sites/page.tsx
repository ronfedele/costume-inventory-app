import { PageHeader } from "@/components/PageHeader";

export default function Page() {
  return (
    <div>
      <PageHeader title="Admin Setup: Sites" description="Manage school or organization sites." />
      <div className="card"><p>TODO_ROLE_GUARD: Restrict this page to admins.</p></div>
    </div>
  );
}
