'use client';

import useNavigation from '@/modules/navigation/useNavigation';
import DropdownMenu from '@/shared/components/ui/dropdown/DropdownMenu';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './navigation.module.scss';

function Navigation() {
  const [isActive, setIsActive] = useState<string | null>('');
  const path = usePathname();
  const { data, isLoading, error } = useNavigation();

  useEffect(() => {
    if (isActive !== path) {
      setIsActive(path);
    }
  }, [path]);

  if (isLoading) return null;
  if (error) return null;

  return (
    <nav className={styles.navigation}>
      <DropdownMenu list={data} />
    </nav>
  );
}

export default Navigation;
