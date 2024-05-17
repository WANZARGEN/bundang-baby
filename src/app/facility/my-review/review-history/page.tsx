'use client'

import { useRouter } from 'next/navigation'

export default function ReviewHistory() {
  const router = useRouter();
  return (
    <>
    <h2>Review History</h2>
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
    <br />
    <div onClick={() => router.push('/facility/my-review/update/1')}>
      Review 1
    </div>
    <div onClick={() => router.push('/facility/my-review/update/2')}>
      Review 2
    </div>
    </>
  );
}