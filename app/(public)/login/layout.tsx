import styles from '../auth.module.scss';

function layout({ children }: IChildren) {
  return (
    <main className={styles.main}>
      <section className={styles.loginContent}>{children}</section>
    </main>
  );
}

export default layout;
