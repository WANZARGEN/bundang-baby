import Link from 'next/link';

export default function FacilityListItem({
  id,
}: Readonly<{
  id: string;
}>) {
  return (
    <Link href={`/facility/facility-details/${id}`} className="mb-4 block border border-gray-300 p-4">
      <div className="text-sm">{id}</div>
    </Link>
  );
}
