'use client'

import { useRouter } from 'next/navigation'

export default function Search() {
  const router = useRouter();
  return (
    <>
    <h2>Search</h2>
    <button type="button" onClick={() => router.push('/settings')}>
      Settings
    </button>
    <div onClick={() => router.push('/facility/facility-details/1')}>
      Facility 1
    </div>
    <div onClick={() => router.push('/facility/facility-details/2')}>
      Facility 2
    </div>
    </>
  );
}