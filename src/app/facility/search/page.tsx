'use client';
import SearchBar from '@/app/facility/search/_components/SearchBar';
import SearchFilterButton from '@/app/facility/search/_components/SearchFilterButton';
// import FacilityList from '@/app/facility/search/_components/FacilityList';
import { FacilityMap } from "@/app/facility/search/_components/FacilityMap";
import { useState } from "react";
// import Button from "@components/buttons/Button";

export default function SearchPage() {
  const [viewType, setViewType] = useState<'map' | 'list'>('map');
  return (
    <>
      <SearchBar />
      <div className="my-3 flex flex-wrap gap-2">
        <SearchFilterButton type="stroller" />
        <SearchFilterButton type="babyChanging" />
        <SearchFilterButton type="breastFeeding" />
        <SearchFilterButton type="familyRestroom" />
      </div>
      <FacilityMap />
      {/*{viewType === 'map' ? (*/}
      {/*  <Button onClick={() => setViewType('list')}>Show List</Button>*/}
      {/*) : (*/}
      {/*  <Button onClick={() => setViewType('map')}>Show Map</Button>*/}
      {/*)}*/}
      {/*{viewType === 'map' ? <FacilityMap /> : <FacilityList />}*/}
    </>
  );
}
