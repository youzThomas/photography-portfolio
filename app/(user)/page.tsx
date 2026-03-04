import Hero from '../components/Hero';
import Carousel from '../components/Carousel';

export default async function HomePage() {
  return (
    <div className='max-w-7xl px-4 lg:px-8'>
      <Hero />
      <Carousel />

      <div className='p-8 flex flex-col items-center sm:mt-8 md:mt-16'>
        <p className='text-center lg:max-w-3xl md:text-2xl xl:max-w-4xl text-gray-600 pt-8 pb-3 font-ovo'>
          &ldquo;The camera is an instrument that teaches people how to see
          without a camera.&rdquo;
        </p>
        <p className='text-center text-sm md:text-base text-gray-500 font-ovo'>
          &mdash; Dorothea Lange
        </p>
      </div>
    </div>
  );
}
