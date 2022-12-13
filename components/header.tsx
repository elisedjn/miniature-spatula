import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className='bg-white p-4 border-b fixed top-0 right-0 left-0 z-20 text-right sm:text-center'>
      <Link href='/'>
        <span className='no-underline block absolute'>
          <Image
            src='/marley-spoon.png'
            alt='Marley Spoon Logo'
            width={200}
            height={100}
          />
        </span>
      </Link>
      <h1 className='text-2xl text-yellow-400'>Miniature Spatula</h1>
    </header>
  );
};

export default Header;
