import { use } from 'react';

const TITLES: Record<string, string> = {
  categories: 'Gestion des Catégories',
  types: 'Gestion des Types',
  items: 'Gestion des Objets',
};

async function ManageLayout(props: IManageLayoutProps) {
  const { manageType } = use(props.params);
  return (
    <div>
      <h1>{TITLES[manageType]}</h1>
      {props.children}
    </div>
  );
}

export default ManageLayout;
