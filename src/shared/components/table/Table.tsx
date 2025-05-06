import styles from './table.module.scss';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import Thead from './Thead';

interface ITableProps<T> {
  header: HeaderCellsType;
  datas: T[];
  footer?: any;
}
function Table<T extends Record<string, any>>({
  datas,
  header,
  footer,
}: ITableProps<T>) {
  return (
    <table className={styles.table}>
      <Thead cells={header} actionCell />
      <Tbody header={header} datas={datas} actionCell />
      {footer && <Tfoot />}
    </table>
  );
}

export default Table;
