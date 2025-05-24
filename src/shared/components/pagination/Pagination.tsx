import styles from './pagination.module.scss';

interface IPaginationProps {
  itemCount: number;
  currentPage: number;
  className?: string;
}

function Pagination({ className }: IPaginationProps) {
  const css = [styles.pagination];
  className && css.push(className);

  return <div className={css.join(' ')}>Pagination</div>;
}

export default Pagination;
