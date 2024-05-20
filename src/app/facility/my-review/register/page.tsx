'use client';

import { useSearchParams, useRouter } from "next/navigation";

export default function Register() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const facilityId = searchParams.get('facilityId');
  return (
    <>
    <h2>Add Review</h2>
    <button type="button" onClick={() => router.back()}>
      Discard
    </button>
    <br />
    <button type="button" onClick={() => router.push('/facility/facility-details/' + facilityId)}>
      Submit
    </button>
    </>
  );
}