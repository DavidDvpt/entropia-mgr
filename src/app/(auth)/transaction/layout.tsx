import SearchItemEngine from '@/features/searchItemEngine/SearchItemEngine';

function layout({ children }: IChildren) {
  return (
    <div>
      <SearchItemEngine />
      {children}
    </div>
  );
}

export default layout;
