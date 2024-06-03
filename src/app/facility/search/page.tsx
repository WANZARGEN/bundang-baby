'use server';
import FacilityListItem from './_components/FacilityListItem';
import SearchBar from '@/app/facility/search/_components/SearchBar';
import SearchFilterButton from '@/app/facility/search/_components/SearchFilterButton';
import { Facility } from '@/database/schema/facility';

async function getFacilities() {
  try {
    const res = await Facility.scan();
    return res.Items ?? [];
  } catch (err) {
    console.error(err);
    return undefined;
  }
}

export default async function SearchPage() {
  const facilities = await getFacilities();

  return (
    <>
      <SearchBar />
      <div className="my-3 flex flex-wrap gap-2">
        <SearchFilterButton type="stroller" />
        <SearchFilterButton type="babyChanging" />
        <SearchFilterButton type="breastFeeding" />
        <SearchFilterButton type="familyRestroom" />
      </div>
      <div className="flex w-full flex-col">
        {facilities ? (
          facilities.map((facility) => <FacilityListItem key={facility.facilityId} id={facility.facilityId} />)
        ) : (
          <div className="text-red-500">Error occurred while fetching data.</div>
        )}
      </div>
    </>
  );
}
