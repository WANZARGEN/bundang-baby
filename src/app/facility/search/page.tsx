'use server';
import FacilityListItem from './_components/FacilityListItem';
import SearchBar from '@/app/facility/search/_components/SearchBar';
import SearchFilterButton from '@/app/facility/search/_components/SearchFilterButton';

export default async function SearchPage() {
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
        <FacilityListItem id="1" />
        <FacilityListItem id="2" />
        <FacilityListItem id="2" />
        ...
      </div>
    </>
  );
}
