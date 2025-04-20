import styles from './dropDownMenu.module.scss';

interface IDropDownItemProps {
  label: string;
  menuList: React.ReactNode;
}
function DropDownItem({ label, menuList }: IDropDownItemProps) {
  return (
    <div className={styles.dropDownItem}>
      <p>{label}</p>
      <div className={styles.dropDown}>{menuList}</div>
    </div>
  );
}

export default DropDownItem;
