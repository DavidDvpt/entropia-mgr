'use client';

import useNavigation from '@/features/navigation/useNavigation';
import DropdownList from '@/shared/components/ui/dropdown/DropdownList';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './navigation.module.scss';

function Navigation() {
  const { data, isLoading, error } = useNavigation();

  if (isLoading) return null;
  if (error) return null;

  const path = usePathname();
  const [isActive, setIsActive] = useState<string | null>('');

  useEffect(() => {
    if (isActive !== path) {
      setIsActive(path);
    }
  }, [path]);

  return (
    <nav className={styles.navigation}>
      <DropdownList list={data} />
    </nav>
  );
}

export default Navigation;
