import Button from '@components/buttons/Button';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function LandingPage() {
  return (
    <>
      <div className="flex h-screen flex-col items-center justify-center space-y-8">
        <img src="/bunbebe-logo-full.svg" alt="BunBeBe Logo" />
        <Link href="/auth/sign-in">
          <Button className="rounded-lg border-0 bg-pink-200 p-2 text-white outline-none">
            <FaArrowRightLong size="1.5rem" />
          </Button>
        </Link>
      </div>
    </>
  );
}
