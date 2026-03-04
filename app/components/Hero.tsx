import React from 'react';
import Link from 'next/link';

function Hero() {
  return (
    <div className='mt-5 flex flex-col sm:flex-row sm:justify-between sm:items-start md:pb-8 lg:pb-16'>
      <div className=''>
        <h1 className='font-ovo text-5xl md:text-7xl'>Photographer.</h1>
      </div>
    </div>
  );
}

export default Hero;
