import { use } from 'react';

async function ManagePage(props: { params: Promise<IManagePageProps> }) {
  const { manageType } = use(props.params);

  if (manageType === 'categories') return <div>manage itemCategory</div>;
  if (manageType === 'types') return <div>manage itemType</div>;
  if (manageType === 'items') return <div>manage item</div>;
}

export default ManagePage;
