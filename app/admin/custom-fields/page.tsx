import { PageHeader } from "@/components/PageHeader";

export default function Page() {
  return (
    <div>
      <PageHeader title="Admin Setup: Custom Fields" description="Enable site-specific custom fields and entity-level extensions." />
      <div className="card"><p>TODO_ROLE_GUARD: Restrict this page to admins.</p></div>
    </div>
  );
}
