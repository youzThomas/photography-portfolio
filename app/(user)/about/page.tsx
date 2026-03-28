import Image from 'next/image';
import headshot from '../../../public/headshot.jpg';

export default function AboutPage() {
  return (
    <div className='px-4 lg:px-8 pb-20'>
      <div className='mx-auto max-w-5xl pt-16 md:pt-24'>
        <h1 className='font-ovo text-5xl mb-12 md:mb-16'>About Me</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 items-start'>
          <div className='font-quattro text-[18px] leading-8 text-gray-800 space-y-6'>
            <p>
              Placeholder Name transforms everyday moments into intentional
              images, and images into lived memories.
            </p>

            <p>
              Based in Placeholder City, this portfolio explores people,
              movement, and environments through a documentary-inspired visual
              approach.
            </p>

            <p>
              Current focus: building long-form visual stories across urban
              culture, sport, and lifestyle.
            </p>

            <p className='text-gray-600'>Photo by Placeholder Photographer</p>

            <p>
              Contact:{' '}
              <a
                className='underline underline-offset-2 hover:text-black transition-colors'
                href='mailto:hello@example.com'
              >
                hello@example.com
              </a>
            </p>
          </div>

          <div className='md:justify-self-end w-full max-w-[520px]'>
            <Image
              src={headshot}
              alt='Portrait placeholder'
              className='w-full h-auto object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
