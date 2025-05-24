import { ChangeEvent, useState } from 'react';

function useSearch() {
  const [searchPattern, setSearchPattern] = useState<string>('');

  const handleChangePattern = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearchPattern(value);
  };

  return { searchPattern, handleChangePattern };
}

export default useSearch;
