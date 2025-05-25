import styles from './pagination.module.scss';
import PaginationBtnContainer from './PaginationBtnContainer';

interface IPaginationProps {
  params: IPaginationParams;
  className?: string;
  onPageChange: (page: number) => void;
}

function Pagination({ className, params, onPageChange }: IPaginationProps) {
  const css = [styles.pagination];
  className && css.push(className);

  return (
    <div className={css.join(' ')}>
      <PaginationBtnContainer
        cPage={params.currentPage}
        tPages={params.totalPage}
        onPageChange={onPageChange}
      />
    </div>
  );
}

export default Pagination;
