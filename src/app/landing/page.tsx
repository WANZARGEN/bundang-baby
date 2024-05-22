import Button from '@components/buttons/Button';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

export default function Landing() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen space-y-8">
        <img src="/bunbebe-logo-full.svg" alt="BunBeBe Logo" />
        <Link href="/auth/sign-in">
          <Button>
            <FaArrowRightLong size="1.5rem" />
          </Button>
        </Link>
      </div>
    </>
  );
}
