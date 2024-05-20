'use client'

import { useRouter } from 'next/navigation'

export default function Settings() {
  const router = useRouter();
  return (
    <>
    <h2>Settings</h2>
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
    <br />
    <button type="button" onClick={() => router.push('/member/profile/update')}>
      Edit Profile
    </button>
    <br />
    <div onClick={() => router.push('/facility/my-review/review-history')}>
      Reviews
    </div>
    <div onClick={() => router.push('/facility/favorite/favorite-list')}>
      Favorites
    </div>
    <div onClick={() => router.push('/auth/sign-in')}>
      Sign Out
    </div>
    </>
  );
}