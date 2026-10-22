'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import urlFor from '../../lib/urlFor';

type Props = {
  collections: ImageCollection[];
};

function MasonryGallery({ collections }: Props) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.12 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.75 } },
  };

  return (
    <>
      {collections.map((collection) => (
        <div className=' w-full mb-24' key={collection._id}>
          <div className='flex flex-col md:flex-row md:justify-between md:items-end mb-2'>
            <p className='font-ovo text-3xl md:text-4xl'>{collection.title}</p>
            <p className='muted text-sm md:text-right md:max-w-xs'>
              {collection.description}
            </p>
          </div>
          <motion.div
            className='columns-2 gap-3 lg:columns-3 lg:gap-4 xl:columns-4 photo-reveal'
            variants={containerVariants}
            initial={false}
            animate='show'
          >
            {collection.images.map((image: ImageObject, index: number) => {
              const dimensions = image.image.asset._ref.match(/-(\d+)x(\d+)-/);
              return (
                <motion.div
                  className='relative mb-3 lg:mb-4 break-inside-avoid photo-reveal'
                  key={image._key || `${image.image.asset._ref}-${index}`}
                  variants={itemVariants}
                >
                  <Image
                    className='h-auto w-full'
                    src={`${urlFor(image.image).url()}${image.isLandscape ? '?w=1920' : '?w=1080'}`}
                    alt={image.alt}
                    width={dimensions ? Number(dimensions[1]) : 400}
                    height={dimensions ? Number(dimensions[2]) : 500}
                    sizes='(max-width: 767px) calc((100vw - 52px) / 2), (max-width: 1023px) calc((100vw - 260px) / 2), (max-width: 1279px) calc((100vw - 328px) / 3), calc((100vw - 344px) / 4)'
                    unoptimized
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      ))}
    </>
  );
}

export default MasonryGallery;
