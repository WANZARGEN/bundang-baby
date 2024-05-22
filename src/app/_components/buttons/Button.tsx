import React from 'react';

interface Props {
  children: string | React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button = (props: Props) => {
  const { onClick, children, className = '' } = props;
  return (
    <button
      className={`cursor-pointer inline-flex justify-center items-center 
      border-0 box-border text-white bg-pink-200 outline-none rounded-lg p-2 
      ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
