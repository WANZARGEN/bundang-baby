'use client'

import { useRouter } from 'next/navigation'

export default function FavoriteList() {
  const router = useRouter();
  return (
    <>
    <h2>Favorite List</h2>
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
    <br />
    <div onClick={() => router.push('/facility/facility-details/2')}>
       Favorite 1 - Facility 2
    </div>
    </>
  );
}