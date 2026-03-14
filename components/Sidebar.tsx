import Link from "next/link";
import { mainNav } from "@/lib/page-config";

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <h1>Theatre DB</h1>
        <p>Inventory + productions</p>
      </div>
      <nav className="nav">
        {mainNav.map((item) => (
          <Link key={item.href} href={item.href} className="navLink">
            <span>{item.label}</span>
            {item.description ? <small>{item.description}</small> : null}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
