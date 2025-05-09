import styles from './table.module.scss';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import Thead from './Thead';

interface ITableProps<T> {
  header: HeaderCellsType;
  datas: Record<keyof T, string>[];
  footer?: any;
  className?: string;
}
function Table<T extends Record<string, any>>({
  datas,
  header,
  footer,
  className,
}: ITableProps<T>) {
  const css = [styles.table];
  className && css.push(className);

  return (
    <table className={css.join(' ')}>
      <Thead cells={header} actionCell />
      <Tbody header={header} datas={datas} actionCell />
      {footer && <Tfoot />}
    </table>
  );
}

export default Table;
