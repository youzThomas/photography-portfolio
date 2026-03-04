'use client';
import images from '../../lib/images';
import Image, { StaticImageData } from 'next/image';

function Carousel() {
  return (
    <div className='mt-8'>
      <div className='columns-1 sm:columns-2 lg:columns-3 gap-2'>
        {images.map((image: StaticImageData, index: number) => (
          <div className='mb-2 break-inside-avoid' key={index}>
            <Image
              className='w-full h-auto'
              src={image}
              alt='photography example'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
