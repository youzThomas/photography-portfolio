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

  const renderPhoto = (image: StaticImageData, index: number) => (
    <motion.div
      className='photo-reveal'
      key={image.src}
      variants={itemVariants}
    >
      <Image
        className='w-full h-auto'
        src={image}
        alt={`Photograph by Thomas You — ${index + 1}`}
        sizes='(max-width: 767px) calc((100vw - 52px) / 2), (max-width: 1023px) calc((100vw - 260px) / 2), (max-width: 1696px) calc((100vw - 328px) / 3), 456px'
        priority={index < 2}
        unoptimized
      />
    </motion.div>
  );

  return (
    <div className='w-full'>
      <motion.div
        className='home-masonry home-masonry-two photo-reveal'
        variants={containerVariants}
        initial={false}
        animate='show'
      >
        <div className='home-masonry-column'>{images.slice(0, 6).map((image, index) => renderPhoto(image, index))}</div>
        <div className='home-masonry-column'>{images.slice(6).map((image, index) => renderPhoto(image, index + 6))}</div>
      </motion.div>

      <motion.div
        className='home-masonry home-masonry-three photo-reveal'
        variants={containerVariants}
        initial={false}
        animate='show'
      >
        <div className='home-masonry-column'>{images.slice(0, 4).map((image, index) => renderPhoto(image, index))}</div>
        <div className='home-masonry-column'>{images.slice(4, 8).map((image, index) => renderPhoto(image, index + 4))}</div>
        <div className='home-masonry-column'>{images.slice(8).map((image, index) => renderPhoto(image, index + 8))}</div>
      </motion.div>
    </div>
  );
}

export default Carousel;
