export type NavItem = {
  href: string;
  label: string;
  description?: string;
};

export const mainNav: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", description: "System health and alerts" },
  { href: "/assets", label: "Asset Library", description: "All asset records" },
  { href: "/costumes", label: "Costume Shop", description: "Costume filters and fittings" },
  { href: "/props", label: "Props & Set Pieces", description: "Props, furniture, scenic items" },
  { href: "/locations", label: "Storage Map", description: "Location tree and moves" },
  { href: "/productions", label: "Production Planner", description: "Assignments and dashboards" },
  { href: "/people", label: "Cast & Measurements", description: "People and measurements" },
  { href: "/loans/requests", label: "Loans & Borrowing", description: "Requests and checkouts" },
  { href: "/scanning", label: "Labels & Scanning", description: "Barcode workflows" },
  { href: "/reports", label: "Reports", description: "Exports and summaries" },
  { href: "/admin/lookups", label: "Admin Setup", description: "Lookups, roles, sites" }
];
