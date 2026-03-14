import { PageHeader } from "@/components/PageHeader";

export default function Page() {
  return (
    <div>
      <PageHeader title="Admin Setup: Storage" description="Manage barcode label templates and storage structures." />
      <div className="card"><p>TODO_ROLE_GUARD: Restrict this page to admins.</p></div>
    </div>
  );
}
