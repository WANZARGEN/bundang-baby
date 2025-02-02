'use client';

import FacilityListItem from '@/app/facility/search/_components/FacilityListItem';
import { useEffect, useState } from 'react';
import { Facility } from '@/database/schema/facility';

export default function FacilityList() {
  const [facilities, setFacilities] = useState<Facility[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchFacilities() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/facilities');

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Facility[] = await response.json();
        setFacilities(data);
      } catch (error: any) {
        console.error('Error fetching facilities:', error);
        setError(error.message || 'An unknown error occurred.');
      } finally {
        setLoading(false);
      }
    }

    fetchFacilities();
  }, []);

  if (loading) {
    return <div className="text-blue-500">Loading facilities...</div>;
  }

  if (error) {
    return <div className="text-red-500">Error: {error}</div>;
  }

  if (!facilities.length) {
    return <div className="text-gray-500">No facilities available.</div>;
  }

  return (
    <div className="flex w-full flex-col">
      {facilities.map((facility) => (
        <FacilityListItem key={facility.facilityId} id={facility.facilityId} />
      ))}
    </div>
  );
}
