import useCssArray from '@/shared/hooks/useCssArray';
import FormField from '../formField/FormField';
import Input from '../input/Input';
import styles from './table.module.scss';
import Tbody from './Tbody';
import Tfoot from './Tfoot';
import Thead from './Thead';
import useSearch from './useSearch';

interface ITableProps<T> {
  name: string;
  header: HeaderCellsType<T>;
  datas: T[];
  footer?: any;
  className?: string;
  enableSearch?: boolean;
  keySearch?: keyof T;
  parserToTable: (datas: T[]) => Promise<TableDataDisplayType<T>>;
  onClick: (value: T) => void;
}

function Table<T extends Record<string, any>>({
  datas,
  header,
  footer,
  className,
  name,
  enableSearch,
  parserToTable,
  onClick,
  keySearch = 'name',
}: ITableProps<T>) {
  const { handleChangePattern, searchPattern } = useSearch();

  const css = useCssArray({ cssArray: [styles.tableContainer, className] });

  const filtered = datas.filter((f) =>
    f[keySearch].toLowerCase().includes(searchPattern.toLowerCase())
  );
  const dataToDisplay = parserToTable(filtered);

  const handleUpdate = (index: number) => {
    onClick(datas[index]);
  };

  return (
    <div className={css}>
      {enableSearch && (
        <div className={styles.searchContainer}>
          <FormField
            name="search"
            label="Recherche :"
            labelPosition="left"
            children={
              <Input
                type="text"
                className={styles.fields}
                value={searchPattern}
                onChange={handleChangePattern}
              />
            }
          />
        </div>
      )}

      <table className={styles.table}>
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
    </div>
  );
}

export default Table;
