'use client';

import { useRouter } from "next/navigation";

export default function Update({ params }: { params: { reviewId: string }}) {
  const router = useRouter();
  const { reviewId } = params;
  return (
    <>
    <h2>Update Review</h2>
    <button type="button" onClick={() => router.back()}>
      Discard
    </button>
    <br />
    reviewId: {reviewId}
    <br />
    <button type="button" onClick={() => router.push('/facility/my-review/review-history')}>
      Submit
    </button>
    </>
  );
}