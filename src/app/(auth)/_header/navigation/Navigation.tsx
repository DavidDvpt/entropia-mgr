'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './navigation.module.scss';

function Navigation() {
  const path = usePathname();
  const [isActive, setIsActive] = useState<string | null>('');

  useEffect(() => {
    if (isActive !== path) {
      setIsActive(path);
    }
  }, [path]);

  return <nav className={styles.navigation}></nav>;
}

export default Navigation;
