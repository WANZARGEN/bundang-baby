'use server';
import SearchBar from '@/app/facility/search/_components/SearchBar';
import SearchFilterButton from '@/app/facility/search/_components/SearchFilterButton';
import FacilityList from '@/app/facility/search/_components/FacilityList';

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
      <FacilityList />
    </>
  );
}
