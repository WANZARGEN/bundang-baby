'use client'

import { useRouter } from 'next/navigation'

export default function Update() {
  const router = useRouter();
  return (
    <>
    <h2>Edit Profile</h2>
    <button type="button" onClick={() => router.back()}>
      Discard
    </button>
    <br/>
    ...
    <br/>
    <button type="button" onClick={() => router.push('/settings')}>
      Update
    </button>
    </>
  );
}