'use server';
import { Facility } from '@/database/schema/facility';
import FacilityListItem from '@/app/facility/search/_components/FacilityListItem';

async function getFacilities() {
  try {
    const res = await Facility.scan();
    return res.Items ?? [];
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export default async function FacilityList() {
  const facilities = await getFacilities();

  return (
    <div className="flex w-full flex-col">
      {facilities ? (
        facilities.map((facility) => <FacilityListItem key={facility.facilityId} id={facility.facilityId} />)
      ) : (
        <div className="text-red-500">Error occurred while fetching data.</div>
      )}
    </div>
  );
}
