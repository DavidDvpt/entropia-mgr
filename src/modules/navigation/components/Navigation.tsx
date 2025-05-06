import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import useNavigation from '../useNavigation';
import NavigationElement from './NavigationElement';
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
      <ul>{data?.map((m) => <NavigationElement key={m.label} {...m} />)}</ul>
    </nav>
  );
}

export default Navigation;
