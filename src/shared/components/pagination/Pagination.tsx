import styles from './pagination.module.scss';
import PaginationBtnContainer from './PaginationBtnContainer';
import PaginationItemPerPage from './PaginationItemPerPage';

interface IPaginationProps {
  params: IPaginationParams;
  className?: string;
  onChange: (params: IPaginationParams) => void;
}

function Pagination({ className, params, onChange }: IPaginationProps) {
  const css = [styles.pagination];
  className && css.push(className);

  const handleChange = (type: keyof IPaginationParams, value: number) => {
    onChange({ ...params, [type]: value });
  };
  return (
    <div className={css.join(' ')}>
      <PaginationItemPerPage
        {...params}
        onItemPerPageChange={(value) => handleChange('itemPerPage', value)}
      />
      <PaginationBtnContainer
        cPage={params.currentPage}
        tPages={params.totalPage}
        onPageChange={(page) => handleChange('currentPage', page)}
      />
    </div>
  );
}

export default Pagination;
