import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getLookups } from "@/lib/data/lookups";
import { boolLabel } from "@/lib/data/utils";

export default async function AdminLookupsPage() {
  const rows = await getLookups();
  return (
    <div>
      <PageHeader title="Lookup Values" description="Dropdown values coming from lookup_value." />
      <DataTable
        columns={["Group", "Code", "Label", "Module", "Sort", "Active"]}
        rows={rows.map((row: any) => [row.lookup_group, row.value_code, row.value_label, row.module_scope, row.sort_order, boolLabel(row.active_flag)])}
      />
    </div>
  );
}
