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
      className={`cursor-pointer inline-flex justify-center items-center box-border 
      ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
