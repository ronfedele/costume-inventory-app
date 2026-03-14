import { PageHeader } from "@/components/PageHeader";
import { Notice } from "@/components/Notice";

export default function CostumeFittingsPage() {
  return (
    <div>
      <PageHeader title="Costume Fittings" description="Reserved for fitting sessions and results." />
      <Notice>
        Your current schema stores general measurements in `party_person.measurements_json`, but does not yet have fitting-session tables. Run the schema-extension package first, then wire this page.
      </Notice>
    </div>
  );
}
