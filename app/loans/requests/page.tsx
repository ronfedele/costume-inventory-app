import { PageHeader } from "@/components/PageHeader";
import { SectionLinks } from "@/components/SectionLinks";

export default function Page() {
  return (
    <div>
      <PageHeader title="Loan Requests" description="Request workflow, approvals, and inter-site borrowing intake." />
      <SectionLinks items={[
        { href: "/loans/agreements", label: "Agreements", note: "Printable and signed loan agreements" },
        { href: "/loans/checkouts", label: "Checkouts", note: "Lender and borrower checkout process" },
        { href: "/loans/returns", label: "Returns", note: "Returns, damage, and fee entry" }
      ]} />
      
    </div>
  );
}
