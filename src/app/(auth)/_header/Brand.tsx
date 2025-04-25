'use client';

import { useRouter } from 'next/navigation';
function Brand() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return <h1 onClick={handleClick}>EU Trade Manager</h1>;
}

export default Brand;
