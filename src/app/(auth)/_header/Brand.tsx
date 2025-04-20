'use client';

import { useRouter } from 'next/navigation';

function Brand() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/');
  };

  return <div onClick={handleClick}>EU Trade Manager</div>;
}

export default Brand;
