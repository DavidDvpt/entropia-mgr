import styles from './genericModal.module.scss';

function GenericModal({ children }: IChildren) {
  return <div className={styles.genericModal}>{children}</div>;
}

export default GenericModal;
