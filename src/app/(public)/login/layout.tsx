import styles from './login.module.scss';
function layout({ children }: IChildren) {
  return <main className={styles.login}>{children}</main>;
}

export default layout;
