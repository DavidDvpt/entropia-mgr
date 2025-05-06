import { Fragment } from 'react';
import ActionCellButton from './ActionCellButton';

interface ITbodyProps<T> extends ITableActionCell {
  header: HeaderCellsType;
  datas: T[];
}
function Tbody<T extends Record<string, any>>({
  datas,
  header,
  actionCell,
}: ITbodyProps<T>) {
  const handleCkick = (line: T) => {
    console.log(line);
  };

  return (
    <tbody>
      <tr>
        {datas.map((m) => {
          return (
            <Fragment key={m.id}>
              {header.map((hk) => (
                <td key={m[hk.key]}>{m[hk.key]}</td>
              ))}
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
