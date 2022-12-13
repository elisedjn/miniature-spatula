import React from 'react';

type ButtonProps = {
  btnText: string;
  disabled?: boolean;
  onClick: () => void;
};

const Button = ({ btnText, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`${
        disabled
          ? 'bg-gray-300 text-white focus:ring-gray-200'
          : 'bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-200 cursor-pointer'
      } rounded-md border border-transparent px-6 py-3 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 w-32 text-center`}
      onClick={onClick}
    >
      {btnText}
    </button>
  );
};

export default Button;
