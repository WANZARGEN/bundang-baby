'use client';

import { MdBabyChangingStation, MdOutlineFamilyRestroom, MdOutlineStroller } from 'react-icons/md';
import { FaPersonBreastfeeding } from 'react-icons/fa6';
import { useState } from 'react';

type SearchFilterType = 'stroller' | 'babyChanging' | 'breastFeeding' | 'familyRestroom';
export default function SearchFilterButton({
  type,
  onClick,
  className = '',
}: Readonly<{
  type: SearchFilterType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}>) {
  const [isActivated, setIsActivated] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsActivated(!isActivated);
    onClick && onClick(e);
  };
  return (
    <>
      <button
        className={`box-border inline-flex h-8 w-8 cursor-pointer items-center justify-center 
        rounded-lg border border-gray-300 bg-white p-1 align-middle text-gray-500 
        hover:border-gray-400 hover:bg-gray-100 hover:text-gray-700
        ${isActivated ? '!border-0 !bg-gray-500 !text-white' : ''}
        ${className}`}
        onClick={handleClick}
      >
        {type === 'stroller' && <MdOutlineStroller size="1.25rem" />}
        {type === 'babyChanging' && <MdBabyChangingStation size="1.25rem" />}
        {type === 'breastFeeding' && <FaPersonBreastfeeding size="1rem" />}
        {type === 'familyRestroom' && <MdOutlineFamilyRestroom size="1.25rem" />}
      </button>
    </>
  );
}
