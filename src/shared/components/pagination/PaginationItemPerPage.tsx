import FormField from '../ui/formField/FormField';
import Select from '../ui/select/Select';
import { paginationItemParPageValues } from './constants';
import styles from './pagination.module.scss';
function PaginationItemPerPage({ itemPerPage, totalPage }: IPaginationParams) {
  const selectOptions = paginationItemParPageValues.map((m) => ({
    id: m,
    name: m,
  }));
  return (
    <div className={styles.itemPerPageContainer}>
      <div>Pages : {totalPage}</div>
      <FormField
        name="itemPerPage"
        label="Item par Page :"
        labelPosition="left"
      >
        <Select
          options={selectOptions}
          value={itemPerPage}
          className={styles.select}
        />
      </FormField>
    </div>
  );
}

export default PaginationItemPerPage;
