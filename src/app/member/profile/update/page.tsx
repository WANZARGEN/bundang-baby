'use client'

import { useRouter } from 'next/navigation'

export default function Update() {
  const router = useRouter();
  return (
    <>
    ...
    <br/>
    <button type="button" onClick={() => router.push('/settings')}>
      Update
    </button>
    </>
  );
}