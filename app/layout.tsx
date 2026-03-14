import "./globals.css";
import { Sidebar } from "@/components/Sidebar";

export const metadata = {
  title: "Theatre Database",
  description: "Vercel frontend scaffold for theatre inventory management",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <Sidebar />
          <main className="main">{children}</main>
        </div>
      </body>
    </html>
  );
}
