'use client';

import { useRouter } from 'next/navigation';

interface Props {
  title: string;
}

export default function PopUpTopNavBar({ title }: Props) {
  const router = useRouter();
  return (
    <div className="pop-up-top-nav-bar">
      <h2>{title}</h2>
      <button type="button" onClick={() => router.back()}>
        Discard
      </button>
    </div>
  );
}
