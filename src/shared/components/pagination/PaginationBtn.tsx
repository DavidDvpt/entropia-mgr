import styles from './pagination.module.scss';
interface IPaginationBtnProps {
  display?: string;
  value: number;
  disabled?: boolean;
  selected?: boolean;
  onClick: (value: number) => void;
  className?: string;
}
function PaginationBtn({
  display,
  value,
  disabled,
  className,
  selected,
  onClick,
}: IPaginationBtnProps) {
  const css = [styles.paginationBtn];
  className && css.push(className);
  selected && css.push(styles.selected);

  return (
    <button
      disabled={disabled}
      onClick={() => onClick(value)}
      className={css.join(' ')}
    >
      {display ?? value}
    </button>
  );
}

export default PaginationBtn;
