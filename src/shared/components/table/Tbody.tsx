import { Fragment } from 'react';
import ActionCellButton from './ActionCellButton';
import styles from './table.module.scss';
interface ITbodyProps<T> extends ITableActionCell {
  header: HeaderCellsType;
  datas: T[];
}
function Tbody<T extends Record<string, any>>({
  datas,
  header,
  actionCell,
}: ITbodyProps<T>) {
  const handleCkick = (line: T) => {};

  return (
    <tbody>
      <tr>
        {datas.map((m) => {
          return (
            <Fragment key={m.id}>
              {header.map((hk) => {
                return (
                  <td
                    key={m[hk.key]}
                    className={hk.key === 'right' ? styles.right : ''}
                  >
                    {m[hk.key]}
                  </td>
                );
              })}
              {actionCell && (
                <ActionCellButton
                  label="Modifier"
                  onClick={() => handleCkick(m)}
                />
              )}
            </Fragment>
          );
        })}
      </tr>
    </tbody>
  );
}

export default Tbody;
