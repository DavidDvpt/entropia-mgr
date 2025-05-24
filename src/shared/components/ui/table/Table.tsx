import Tbody from './Tbody';
import Tfoot from './Tfoot';
import Thead from './Thead';
import styles from './table.module.scss';
interface ITableProps<T> {
  name: string;
  header: HeaderCellsType<T>;
  datas?: T[];
  parsedDatas?: TableDataDisplayType<T>;
  footer?: any;
  className?: string;
  parserToTable?: (datas: T[]) => Promise<TableDataDisplayType<T>>;
  onUpdate: (value: number) => void;
  patternSearch?: string;
}

function Table<T extends Record<string, any>>({
  datas,
  parsedDatas,
  header,
  footer,
  className,
  name,
  parserToTable,
  onUpdate,
}: ITableProps<T>) {
  const dataToDisplay =
    datas && parserToTable
      ? (parserToTable(datas) ?? [])
      : Promise.resolve(parsedDatas ?? []);

  const css = [styles.table];
  className && css.push(className);

  return (
    <table className={css.join(' ')}>
      <Thead cells={header} actionCell />
      <Tbody
        header={header}
        datas={dataToDisplay}
        actionCell
        name={name}
        onUpdate={onUpdate}
      />
      {footer && <Tfoot />}
    </table>
  );
}

export default Table;
