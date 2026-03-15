import { PageShell } from "../../../components/PageShell";
import { getLookupValues } from "../../../lib/data/lookups";
import { SimpleTable } from "../../../components/SimpleTable";

export default async function AdminLookupsPage() {
  const values = await getLookupValues();

  return (
    <PageShell title="Lookup Values" description="Maintain dropdown values.">
      <SimpleTable
        headers={["Group", "Code", "Label", "Active"]}
        rows={values.map((v: any) => [
          v.lookup_group ?? "",
          v.value_code ?? "",
          v.value_label ?? "",
          v.active_flag ? "Yes" : "No",
        ])}
      />
    </PageShell>
  );
}
