import styles from './login.module.scss';

function layout({ children }: IChildren) {
  return <main className={styles.loginPage}>{children}</main>;
}

export default layout;
