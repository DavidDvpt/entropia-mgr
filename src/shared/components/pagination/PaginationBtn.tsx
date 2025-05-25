import styles from './pagination.module.scss';
interface IPaginationBtnProps {
  display?: string;
  value: number;
  disabled?: boolean;
  selected?: boolean;
  onPageChange: (value: number) => void;
  className?: string;
}
function PaginationBtn({
  display,
  value,
  disabled,
  className,
  selected,
  onPageChange,
}: IPaginationBtnProps) {
  const css = [styles.paginationBtn];
  className && css.push(className);
  selected && css.push(styles.selected);

  return (
    <button
      disabled={disabled}
      onClick={() => onPageChange(value)}
      className={css.join(' ')}
    >
      {display ?? value}
    </button>
  );
}

export default PaginationBtn;
