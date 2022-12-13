import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-1 pt-6 border-t justify-center items-center'>
      Made by
      <a
        href='https://elisedjn.github.io/'
        target='_blank'
        rel='noreferrer'
        className='mx-1 inline-block font-bold text-yellow-400'
      >
        Elise Djn
      </a>
      with 💛
    </footer>
  );
};

export default Footer;
