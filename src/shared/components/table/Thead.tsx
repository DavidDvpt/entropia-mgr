interface ITheadProps {
  cells: HeaderCellsType;
  actionCell?: boolean;
}

function Thead({ cells, actionCell }: ITheadProps) {
  return (
    <thead>
      <tr>
        {cells.map((m) => (
          <th key={m.label}>{m.label}</th>
        ))}
        {actionCell && <th></th>}
      </tr>
    </thead>
  );
}

export default Thead;
