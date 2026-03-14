type Props = {
  columns: string[];
  rows: string[][];
};

export function DataTablePlaceholder({ columns, rows }: Props) {
  return (
    <div className="card tableWrap">
      <table className="table">
        <thead>
          <tr>{columns.map((column) => <th key={column}>{column}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cellIdx) => <td key={`${idx}-${cellIdx}`}>{cell}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
