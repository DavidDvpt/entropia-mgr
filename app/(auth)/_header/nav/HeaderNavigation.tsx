'use client';

import { nanoid } from '@reduxjs/toolkit';
import { isEmpty } from 'lodash';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from '../header.module.scss';
import TabMenu from './TabMenu';
import { navLinks } from './constants';

function HeaderNavigation() {
  const path = usePathname();
  const [isActive, setIsActive] = useState<string | null>('');

  useEffect(() => {
    if (isActive !== path) {
      setIsActive(path);
    }
  }, [path]);

  return (
    <nav className={styles.navElement}>
      <ul>
        {navLinks.map((m) => (
          <li
            className={isActive === m.url ? styles.isActive : ''}
            key={nanoid()}
          >
            <Link
              href={m.url}
              onClick={() => setIsActive(m.url)}
              className={styles.link}
            >
              {m.label}
            </Link>

            {!isEmpty(m.subMenus) && (
              <TabMenu>
                {m.subMenus.map((sm) => (
                  <li key={nanoid()}>
                    <Link
                      href={sm.url}
                      onClick={() => setIsActive(sm.url)}
                      className={styles.link}
                    >
                      {sm.label}
                    </Link>
                  </li>
                ))}
              </TabMenu>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default HeaderNavigation;
