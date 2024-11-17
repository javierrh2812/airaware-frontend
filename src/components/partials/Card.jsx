import Link from 'next/link';

export default function Card() {
  return (
    <div className='pr-0 my-2 lg:my-0 lg:pr-4'>
      <div
        className='relative flex items-end justify-start w-full lg:w-72 text-left bg-center bg-cover h-96 dark:bg-gray-500'
        style={{
          backgroundImage: 'url("/icon/map.svg")',
        }}
      >
        <div className='absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900'>
          <div className='absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3'>
            <p className='px-3 py-2 text-md font-semibold tracking-wider uppercase dark:text-gray-100'>
              Real Time Map
            </p>
          </div>
        </div>
        <h2 className='z-10 p-5'>
          <Link href={'/map'}>
            <a className='font-medium text-md hover:bg-prime text-gray-100 border py-1.5 px-2'>
              SEE ON MAP
            </a>
          </Link>
        </h2>
      </div>
    </div>
  );
}
