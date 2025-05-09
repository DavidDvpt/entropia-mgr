import { use } from 'react';
import styles from './manageType.module.scss';
const TITLES: Record<string, string> = {
  categories: 'Gestion des Catégories',
  types: 'Gestion des Types',
  items: 'Gestion des Objets',
};

function ManageLayout(props: IManageLayoutProps) {
  const { manageType } = use(props.params);

  return (
    <div className={styles.manageTypeLayout}>
      <h1>{TITLES[manageType]}</h1>
      {props.children}
    </div>
  );
}

export default ManageLayout;
