import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { DataTable } from "@/components/DataTable";
import { getPeople } from "@/lib/data/people";
import { boolLabel } from "@/lib/data/utils";

export default async function PeoplePage() {
  const people = await getPeople();

  return (
    <div>
      <PageHeader title="Cast & Measurements" description="People records currently stored in party_person." />
      <DataTable
        columns={["Name", "Email", "Phone", "Home site", "Allergies", "Active"]}
        rows={people.map((row: any) => [
          <Link key={row.person_id} href={`/people/${row.person_id}`}>{row.display_name}</Link>,
          row.email ?? "—",
          row.phone ?? "—",
          row.home_site?.site_name ?? "—",
          row.allergies_notes ?? "—",
          boolLabel(row.active_flag),
        ])}
      />
    </div>
  );
}
