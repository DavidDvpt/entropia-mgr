import styles from '../header.module.scss';

function TabMenu({ children }: IChildren) {
  return (
    <div className={styles.tabMenu}>
      <ul>{children}</ul>
    </div>
  );
}

export default TabMenu;
