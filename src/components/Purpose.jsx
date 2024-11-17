import purposeList from '../json/purposeItem.json';
import PurposeItem from './partials/PurposeItem';

export default function Purpose() {
  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-prime text-gray-100'>
      <h2 className='mb-8 text-4xl font-bold leading-none text-center font-sora'>
        Qué ofrecemos?
      </h2>
      <ul className='grid gap-3 md:grid-cols-2 lg:grid-cols-3'>
        {purposeList.items &&
          purposeList.items.map((item, index) => {
            return <PurposeItem key={index} offerItem={item} />;
          })}
      </ul>
    </div>
  );
}
