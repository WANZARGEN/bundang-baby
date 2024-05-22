'use client';

import { useRouter } from 'next/navigation';
import Button from '@components/buttons/Button';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Landing() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <img src="/bunbebe-logo-full.svg" alt="BunBeBe Logo" />
        <Button onClick={() => router.push('/auth/sign-in')}>
          <FaArrowRightLong size="1.5rem" />
        </Button>
      </div>
    </>
  );
}
