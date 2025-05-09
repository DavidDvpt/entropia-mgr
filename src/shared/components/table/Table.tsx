import useCssArray from '@/shared/hooks/useCssArray';
import styles from './table.module.scss';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import Thead from './Thead';

interface ITableProps<T> {
  name: string;
  header: HeaderCellsType<T>;
  datas: T[];
  footer?: any;
  className?: string;
  parserToTable: (datas: T[]) => Promise<TableDataDisplayType<T>>;
  onClick: (value: T) => void;
}
function Table<T extends Record<string, any>>({
  datas,
  header,
  footer,
  className,
  name,
  parserToTable,
  onClick,
}: ITableProps<T>) {
  const css = useCssArray({ cssArray: [styles.table, className] });

  const dataToDisplay = parserToTable(datas);

  const handleUpdate = (index: number) => {
    onClick(datas[index]);
  };

  return (
    <table className={css}>
      <Thead cells={header} actionCell />
      <Tbody
        header={header}
        datas={dataToDisplay}
        actionCell
        name={name}
        onUpdate={handleUpdate}
      />
      {footer && <Tfoot />}
    </table>
  );
}

export default Table;
