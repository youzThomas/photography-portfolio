import Link from 'next/link';

function Footer() {
  return (
    <footer className='p-8 bg-gray-100 absolute -bottom-48 w-full text-gray-700 text-sm lg:text-base mt-24'>
      <div className='space-y-5 flex flex-col sm:items-center md:flex-row max-w-xl mx-auto lg:space-x-8'>
        <div className='md:mr-auto'>
          <p className='text-base font-ovo font-semibold'>
            Thomas You Photography
          </p>
          <p>&copy;Thomas You 2026. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
