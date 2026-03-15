import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { SimpleTable } from "@/components/SimpleTable";
import { getPeople } from "@/lib/data/people";

export default async function PeoplePage() {
  const people = await getPeople();

  return (
    <PageShell title="Cast & Measurements" description="People, measurements, and fitting history.">
      <SimpleTable
        headers={["Name", "Email", "Open"]}
        rows={people.map((p: any) => [
          p.display_name ?? "",
          p.email ?? "",
          <Link key={p.person_id} href={`/people/${p.person_id}`}>Open</Link>,
        ])}
      />
    </PageShell>
  );
}
