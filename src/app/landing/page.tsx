import Button from '@components/buttons/Button';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function LandingPage() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <img src="/bunbebe-logo-full.svg" alt="BunBeBe Logo" />
        <Link href="/auth/sign-in">
          <Button className="border-0 outline-none rounded-lg p-2 bg-pink-200 text-white">
            <FaArrowRightLong size="1.5rem" />
          </Button>
        </Link>
      </div>
    </>
  );
}
