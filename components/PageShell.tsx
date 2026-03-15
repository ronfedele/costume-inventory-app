import { ReactNode } from "react";
import { Nav } from "@/components/Nav";

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
