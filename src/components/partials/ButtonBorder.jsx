import Link from 'next/link';

export default function ButtonBorder({ title, link, theme }) {
  return (
    <Link href={link ? link : '/'}>
      <a className='inline-flex items-center px-8 py-3 text-prime border border-prime rounded hover:bg-prime hover:text-white active:bg-prime focus:outline-none focus:ring'>
        <span className='text-sm font-medium'>{title}</span>
      </a>
    </Link>
  );
}
