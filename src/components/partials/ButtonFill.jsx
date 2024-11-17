import Link from 'next/link';

export default function ButtonFill({ title, link }) {
  return (
    <Link href={link ? link : '/'}>
      <a className='inline-flex items-center px-8 py-3 text-white bg-prime border border-prime rounded hover:bg-transparent focus:outline-none focus:ring mr-2 mb-4 md:mb-0 cursor-pointer font-sora'>
        <span className='text-sm font-medium'>{title}</span>
      </a>
    </Link>
  );
}
