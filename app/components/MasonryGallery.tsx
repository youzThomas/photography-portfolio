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
            <p className='text-gray-500 text-sm md:text-right md:max-w-xs'>
              {collection.description}
            </p>
          </div>
          <motion.div
            className='grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-3 md:gap-4 xl:grid-cols-4'
            variants={containerVariants}
            initial='hidden'
            animate='show'
          >
            {collection.images.map((image: ImageObject) => {
              return (
                <motion.div
                  className={`relative overflow-hidden ${
                    image.isLandscape
                      ? 'aspect-[4/3] sm:col-span-2'
                      : 'aspect-[3/4] col-span-1'
                  }`}
                  key={image.alt}
                  variants={itemVariants}
                >
                  <Image
                    className='object-cover object-center h-full w-full'
                    src={`${urlFor(image.image).url()}${image.isLandscape ? '?w=1920' : '?w=1080'}`}
                    alt={image.alt}
                    width={400}
                    height={500}
                    sizes={
                      image.isLandscape
                        ? '(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1280px) 66vw, 50vw'
                        : '(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1280px) 33vw, 25vw'
                    }
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
