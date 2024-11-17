import Image from 'next/image';

export default function FeatureList({ feautureItem }) {
  return (
    <div className='max-w-md'>
      <div className='flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-secondary'>
        <Image
          src={`/icon/sensors/prime/${feautureItem.icon}.svg`}
          height={32}
          width={32}
          alt={'icon-sensors'}
        />
      </div>
      <h6 className='mb-2 font-semibold leading-5 font-sora'>
        {feautureItem.name}
      </h6>
      <p className='text-sm text-gray-700 font-nunito text-justify'>
        {feautureItem.desc}
      </p>
    </div>
  );
}
