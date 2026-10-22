'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import headshot from '../../../public/headshot.jpg';

export default function AboutPage() {
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
    <div className='content-page pb-10'>
      <div className='mx-auto max-w-5xl'>
        <h1 className='page-heading'>About Me</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start'>
          <div className='order-2 md:order-1 text-[16px] leading-8 muted space-y-6'>
            <p>
              Thomas You (Halcyon) is a photographer based between Chapel
              Hill, NC and Guangzhou, China.
            </p>

            <p>
              Working across landscape, lifestyle, and sport, he focuses on
              natural light, simple composition, and a quiet approach to
              storytelling.
            </p>

            <p>
              Available for commissions and collaborations.
              <br />
              Contact:{' '}
              <a
                className='underline underline-offset-2 hover:text-[var(--foreground)] transition-colors'
                href='mailto:halcyonyau@outlook.it'
              >
                halcyonyau@outlook.it
              </a>
            </p>
          </div>

          <motion.div
            className='order-1 md:order-2 md:justify-self-end w-full max-w-[520px] photo-reveal'
            variants={containerVariants}
            initial={false}
            animate='show'
          >
            <motion.div className='photo-reveal' variants={itemVariants}>
              <Image
                src={headshot}
                alt='Portrait of Thomas You'
                className='w-full h-auto object-cover'
                sizes='(max-width: 768px) 100vw, 520px'
                priority
                unoptimized
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
