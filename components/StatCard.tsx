type Props = {
  label: string;
  value: string;
  note?: string;
};

export function StatCard({ label, value, note }: Props) {
  return (
    <div className="card statCard">
      <div className="muted">{label}</div>
      <div className="statValue">{value}</div>
      {note ? <div className="smallMuted">{note}</div> : null}
    </div>
  );
}
