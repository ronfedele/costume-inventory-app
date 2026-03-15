import Link from "next/link";

const links = [
  ["/dashboard", "Dashboard"],
  ["/assets", "Assets"],
  ["/costumes", "Costumes"],
  ["/props", "Props"],
  ["/locations", "Locations"],
  ["/productions", "Productions"],
  ["/people", "People"],
  ["/loans/requests", "Loans"],
  ["/scanning", "Scanning"],
  ["/reports", "Reports"],
  ["/admin/lookups", "Admin"],
];

export function Nav() {
  return (
    <nav style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 24 }}>
      {links.map(([href, label]) => (
        <Link key={href} href={href} style={{ textDecoration: "none" }}>
          {label}
        </Link>
      ))}
    </nav>
  );
}
