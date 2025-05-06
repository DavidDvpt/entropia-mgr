interface IManagePageProps {
  manageType: 'categories' | 'types' | 'items';
}

interface IManageLayoutProps extends IChildren {
  params: Promise<IManagePageProps>;
}
