'use client';

import { useRouter } from "next/navigation";

export default function FacilityDetails({ params } : { params: { facilityId: string }}) {
  const router = useRouter();
  const { facilityId } = params;
  return (
    <>
    <h2>Facility Details</h2>
    <button type="button" onClick={() => router.back()}>
      Back
    </button>
    <br />
    ...
    <br />
    <h3>Facility Reviews</h3>
    <button type="button" onClick={() => router.push(`/facility/my-review/register?facilityId=${facilityId}`)}>
      Review
    </button>
    <div>
      Review 1
    </div>
    <div>
      Review 2
    </div>
    </>
  );
}