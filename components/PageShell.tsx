import { ReactNode } from "react";
import Link from "next/link";

function Nav() {
  const links = [
    ["/dashboard", "Dashboard"],
    ["/assets", "Assets"],
    ["/costumes", "Costumes"],
    ["/props", "Props"],
    ["/locations", "Locations"],
    ["/productions", "Productions"],
    ["/people", "People"],
    ["/loans/requests", "Loans"],
    ["/reports", "Reports"],
    ["/admin/lookups", "Admin"],
  ];

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

export function PageShell({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <div style={{ fontFamily: "sans-serif", padding: 24 }}>
      <Nav />
      <h1 style={{ marginBottom: 8 }}>{title}</h1>
      {description ? <p style={{ marginTop: 0, color: "#555" }}>{description}</p> : null}
      {children}
    </div>
  );
}
