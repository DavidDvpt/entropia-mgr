interface Props<T> {
  fetchFn: () => Promise<T[]>;
  render: (data: T[]) => React.ReactNode;
  parser?: (item: any) => Promise<T>;
}

async function GenericServerTableWrapper<T>({
  fetchFn,
  render,
  parser,
}: Props<T>) {
  const raw = await fetchFn();
  const data = parser ? await Promise.all(raw.map(parser)) : raw;

  return <>{render(data)}</>;
}

export default GenericServerTableWrapper;
