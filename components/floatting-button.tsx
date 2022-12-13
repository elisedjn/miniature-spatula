import React from 'react';

type FloattingButtonProps = {
  text: string;
  btnText: string;
  disabled: boolean;
  onBtnClick: () => void;
};

const FloattingButton = ({
  text,
  btnText,
  disabled,
  onBtnClick,
}: FloattingButtonProps) => {
  return (
    <div className='fixed bottom-0 right-0 left-0 bg-white bg-opacity-90 p-4 border-t flex justify-between items-center'>
      <div />
      <p>{text}</p>
      <button
        disabled={disabled}
        onClick={onBtnClick}
        className={`${
          disabled
            ? 'bg-gray-300 text-white focus:ring-gray-200'
            : 'bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-200 cursor-pointer'
        } inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 `}
      >
        {btnText}
      </button>
    </div>
  );
};

export default FloattingButton;
