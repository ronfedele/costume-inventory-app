import { PageHeader } from "@/components/PageHeader";

export default function PersonDetailPage({ params }: { params: { personId: string } }) {
  return (
    <div>
      <PageHeader title={`Person ${params.personId}`} description="Measurement profile and fitting history placeholder." />
      <div className="grid">
        <div className="card"><h3>Structured measurement profile</h3><p>TODO_SUPABASE: Load measurement fields instead of only storing everything in JSON.</p></div>
        <div className="card"><h3>Fitting history</h3><p>TODO_SUPABASE: Show prior fittings, allergies, and size suggestions.</p></div>
      </div>
    </div>
  );
}
