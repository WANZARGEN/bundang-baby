'use client'

import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter();
  return (
    <>
    <h2>Sign Up</h2>
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
    <br />
    <button type="button" onClick={() => router.push('/facility/search')}>
      Sign Up
    </button>
    </>
  );
}
