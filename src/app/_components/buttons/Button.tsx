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
      className={`box-border inline-flex cursor-pointer items-center justify-center 
      ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
