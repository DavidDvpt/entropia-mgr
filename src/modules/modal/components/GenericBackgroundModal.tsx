import styles from './genericModal.module.scss';

function GenericBackgroundModal({ children }: IChildren) {
  return <div className={styles.genericBackgroundModal}>{children}</div>;
}

export default GenericBackgroundModal;
