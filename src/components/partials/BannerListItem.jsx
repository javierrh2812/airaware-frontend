import { renderIcon } from '../../helpers/bannerHead';

export default function BannerListItem({ title, value, symbol, compareData }) {
  return (
    <div className='flex py-2 bg-slate-200 px-2 my-2 text-base items-center justify-center rounded font-nunito'>
      <h2 className='px-1'>{title}</h2>
      <p className='ml-auto mx-4'>
        <span className='font-bold'>{value}</span>
        {symbol}
      </p>
      {renderIcon(value, compareData)}
    </div>
  );
}
