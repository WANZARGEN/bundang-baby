'use client';

import { MdBabyChangingStation, MdOutlineFamilyRestroom, MdOutlineStroller } from "react-icons/md";
import { FaPersonBreastfeeding } from "react-icons/fa6";
import { useState } from "react";

type SearchFilterType = 'stroller'|'babyChanging'|'breastFeeding'|'familyRestroom';
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
        className={`cursor-pointer inline-flex justify-center items-center box-border p-1 h-8 w-8 align-middle
        border rounded-lg border-gray-300
        bg-white text-gray-500
        hover:bg-gray-100 hover:text-gray-700 hover:border-gray-400
        ${isActivated ? '!bg-gray-500 !text-white !border-0' : ''}
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
