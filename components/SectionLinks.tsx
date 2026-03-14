import Link from "next/link";

type LinkItem = { href: string; label: string; note?: string };

export function SectionLinks({ items }: { items: LinkItem[] }) {
  return (
    <div className="grid">
      {items.map((item) => (
        <Link key={item.href} href={item.href} className="card tileLink">
          <strong>{item.label}</strong>
          {item.note ? <p>{item.note}</p> : null}
        </Link>
      ))}
    </div>
  );
}
