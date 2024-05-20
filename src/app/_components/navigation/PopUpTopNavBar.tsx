'use client';

import { useRouter } from 'next/navigation';

interface Props {
  title: string;
  onDiscard?: () => void;
}

export default function PopUpTopNavBar({ title, onDiscard }: Props) {
  const router = useRouter();
  const handleClickDiscard = () => {
    if (onDiscard) {
      onDiscard();
    }
    router.back()
  }
  return (
    <div className="pop-up-top-nav-bar">
      <h2>{title}</h2>
    <button type="button" onClick={handleClickDiscard}>
      Discard
    </button>
    </div>
  );
}