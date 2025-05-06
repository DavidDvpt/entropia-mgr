type HeaderKey = Extract<keyof T, string>;
type HeaderKeys = HeaderKey[];

interface ITableActionCell {
  actionCell?: boolean;
}
interface HeaderCellType<T> extends ITableActionCell {
  key: Extract<keyof T, string>;
  label: string;
}
type HeaderCellsType = HeaderCellType<T>[];
