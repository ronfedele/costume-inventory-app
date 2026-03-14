import { PageHeader } from "@/components/PageHeader";

export default function CostumeFittingsPage() {
  return (
    <div>
      <PageHeader title="Costume Fittings" description="Fitting sessions, structured measurement profiles, and fitting results." />
      <div className="grid">
        <div className="card">
          <h3>Recommended workflow</h3>
          <ul className="list">
            <li>Create a fitting session</li>
            <li>Add participants</li>
            <li>Record garments tried</li>
            <li>Mark fit status and alterations needed</li>
            <li>Print fitting sheets if needed</li>
          </ul>
        </div>
        <div className="card">
          <h3>Supabase wiring targets</h3>
          <ul className="list">
            <li>person_measurement_profile</li>
            <li>fitting_session</li>
            <li>fitting_participant</li>
            <li>fitting_garment_result</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
