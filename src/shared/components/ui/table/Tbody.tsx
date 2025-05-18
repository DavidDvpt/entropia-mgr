'use client';

import { useEffect, useState } from 'react';
import ActionCellButton from './ActionCellButton';
import styles from './table.module.scss';
interface ITbodyProps<T> extends ITableActionCell {
  name: string;
  header: HeaderCellsType<T>;
  datas: Promise<TableDataDisplayType<T>>;
  onUpdate?: (index: number) => void;
}
function Tbody<T>({
  datas,
  header,
  actionCell,
  onUpdate,
  name,
}: ITbodyProps<T>) {
  const [resolvedData, setResolvedData] =
    useState<TableDataDisplayType<T> | null>(null);

  useEffect(() => {
    let isMounted = true;
    Promise.resolve(datas).then((d) => {
      if (isMounted) setResolvedData(d);
    });
    return () => {
      isMounted = false;
    };
  }, [datas]);

  const handleCkick = (i: number) => {
    onUpdate?.(i);
  };

  return (
    <tbody>
      <>
        {resolvedData?.map((m, i) => {
          return (
            <tr key={name + i}>
              {header.map((hk, j) => {
                return (
                  <td
                    key={m[hk.key] + j}
                    className={hk.key === 'right' ? styles.right : ''}
                  >
                    {m[hk.key]}
                  </td>
                );
              })}
              {actionCell && (
                <ActionCellButton
                  label="Modifier"
                  onClick={() => handleCkick(i)}
                />
              )}
            </tr>
          );
        })}
      </>
    </tbody>
  );
}

export default Tbody;
