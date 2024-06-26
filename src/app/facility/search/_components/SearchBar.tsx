'use client';

import Button from '@components/buttons/Button';
import { GoSearch } from 'react-icons/go';
import { RiMore2Line } from 'react-icons/ri';
import Link from 'next/link';

export default function SearchBar() {
  const handleClickSearch = () => {
    console.log('Search clicked');
  };
  return (
    <div
      className="my-2 flex w-full items-center justify-between
      rounded-lg border border-gray-300 p-2
      transition-shadow duration-300 ease-in-out hover:shadow-md"
    >
      <input
        className="ml-1 mr-3 flex-1
      placeholder:text-gray-700 focus:border-0
      focus:placeholder-gray-400 focus:outline-none"
        type="text"
        placeholder="Enter childcare location"
      />
      <Button
        className="text-gray-500 hover:text-gray-700
      focus:text-gray-700 focus:shadow-none focus:outline-none focus:ring-0"
        onClick={handleClickSearch}
      >
        <GoSearch size="1.25rem" />
      </Button>
      <Link href="/settings" className="ml-2 text-gray-500 hover:text-gray-700">
        <RiMore2Line size="1.5rem" />
      </Link>
    </div>
  );
}
