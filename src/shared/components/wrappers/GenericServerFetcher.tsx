interface Props<T> {
  fetchFn: () => Promise<T[]>;
  render: (data: T[]) => React.ReactNode;
  parser?: (item: any) => Promise<T>;
  injectToStore?: {
    slice: any; // Exemple: itemCategoryApi
    key: string; // Exemple: ['itemCategories']
  };
}

async function GenericServerFetcher<T>({ fetchFn, render, parser }: Props<T>) {
  try {
    const raw = await fetchFn();
    const data = parser ? await Promise.all(raw.map(parser)) : raw;

    return <>{render(data)}</>;
  } catch (error) {
    console.error('GenericServerFetchWrapper error:', error);
    return <div>Erreur de chargement</div>;
  }
}

export default GenericServerFetcher;
