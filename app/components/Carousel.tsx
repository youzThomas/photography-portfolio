'use client';
import { motion } from 'framer-motion';
import images from '../../lib/images';
import Image, { StaticImageData } from 'next/image';

function Carousel() {
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
    <div className='mt-8'>
      <motion.div
        className='columns-1 sm:columns-2 lg:columns-3 gap-2'
        variants={containerVariants}
        initial='hidden'
        animate='show'
      >
        {images.map((image: StaticImageData, index: number) => (
          <motion.div
            className='mb-2 break-inside-avoid'
            key={index}
            variants={itemVariants}
          >
            <Image
              className='w-full h-auto'
              src={image}
              alt='photography example'
              sizes='(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Carousel;
