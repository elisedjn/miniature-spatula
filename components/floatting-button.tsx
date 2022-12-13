import Link from 'next/link';
import React from 'react';
import Button from './marley-button';

type FloattingButtonProps = {
  text: string;
  btnText: string;
  disabled: boolean;
  linkTo: string;
};

const FloattingButton = ({ text, btnText, disabled, linkTo }: FloattingButtonProps) => {
  return (
    <div className='fixed bottom-0 right-0 left-0 bg-white bg-opacity-90 p-4 border-t flex justify-between items-center'>
      <div />
      <p className='text-lg'>{text}</p>
      {disabled ? (
        <Button btnText={btnText} disabled onClick={() => null} />
      ) : (
        <Link
          data-testid='link-to-continue'
          href={linkTo}
          className='bg-yellow-400 text-white hover:bg-yellow-500 focus:ring-yellow-200 cursor-pointer
          inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium  shadow-sm  focus:outline-none focus:ring-2  focus:ring-offset-2 '
        >
          {btnText}
        </Link>
      )}
    </div>
  );
};

export default FloattingButton;
