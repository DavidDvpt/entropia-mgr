import styles from './table.module.scss';
interface ITheadProps {
  cells: HeaderCellsType;
  actionCell?: boolean;
}

function Thead({ cells, actionCell }: ITheadProps) {
  return (
    <thead>
      <tr>
        {cells.map((m) => (
          <th key={m.label} className={m.align === 'right' ? styles.right : ''}>
            {m.label}
          </th>
        ))}
        {actionCell && <th className={styles.actionCellWidth}></th>}
      </tr>
    </thead>
  );
}

export default Thead;
