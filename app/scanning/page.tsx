import { PageHeader } from "@/components/PageHeader";
import { Notice } from "@/components/Notice";

export default function ScanningPage() {
  return (
    <div>
      <PageHeader title="Scanning" description="Reserved for active scan-session workflows." />
      <Notice>
        Your current schema has `asset_tag`, but not `inventory_scan_session` or `inventory_scan_event` yet. Apply the schema-extension SQL first, then wire camera scanning here.
      </Notice>
    </div>
  );
}
