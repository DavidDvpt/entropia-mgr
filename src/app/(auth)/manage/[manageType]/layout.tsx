'use client';

import { useAppDispatch } from '@/lib/redux/store';
import { modalActions } from '@/modules/modal/modalSlice';
import Button from '@/shared/components/ui/button/Button';
import { use } from 'react';
import styles from './manageType.module.scss';

const TITLES: Record<string, string> = {
  categories: 'Gestion des Catégories',
  types: 'Gestion des Types',
  items: 'Gestion des Objets',
};

function ManageLayout(props: IManageLayoutProps) {
  const { manageType } = use(props.params);
  const dispatch = useAppDispatch();

  const handleCreate = () => {
    switch (manageType) {
      case 'categories':
        dispatch(
          modalActions.setItemCategoryForm({ display: true, item: null })
        );
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.manageTypeLayout}>
      <h1>{TITLES[manageType]}</h1>

      {props.children}

      <div className={styles.buttonContainer}>
        <Button onClick={handleCreate} variant="primary">
          {manageType === 'categories' && 'Créer une nouvelle catégorie'}
        </Button>
      </div>
    </div>
  );
}

export default ManageLayout;
