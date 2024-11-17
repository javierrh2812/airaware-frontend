import Image from 'next/image';
import Link from 'next/link';
import _ from 'lodash';
import moment from 'moment';

export default function PopupLabel({ dataDevice }) {
  const { condition, location, data_result, device_id_path, created_at } =
    dataDevice.properties;

  return (
    <div className='max-w-md px-1 py-2 mx-auto rounded-lg text-slate-100 divide-y font-sora'>
      <div className='my-4 border-b-2'>
        <h3 className='text-base my-2 text-slate-700 font-medium'>
          {location}
        </h3>
      </div>
      <div
        className={`flex justify-between space-x-6 bg-${condition.replace(
          / /g,
          '_'
        )} rounded-md p-2`}
      >
        <div className='flex flex-col items-center'>
          <Image
            src={`/icon/air_quality/${condition.replace(/ /g, '-')}.svg`}
            alt='icon_illustrate'
            height={46}
            width={46}
          />
        </div>
        <span className='font-bold text-sm my-auto text-white'>
          {data_result.iaq} - {_.capitalize(condition)}
        </span>
      </div>
      <div className='flex justify-between mt-8 space-x-4 text-slate-700'>
        <div className='flex flex-col items-center space-y-1'>
          <span className='uppercase'>Presión</span>
          <Image
            src={'/icon/sensors/prime/pressure.svg'}
            alt='pressure_icon'
            height={24}
            width={24}
          />
          <span className='font-nunito text-slate-800'>
            {data_result.pressure} KPa
          </span>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <span className='uppercase'>Temperatura</span>
          <Image
            src={'/icon/sensors/prime/temperature.svg'}
            alt='temperature_icon'
            height={24}
            width={24}
          />
          <span className='font-nunito text-slate-800'>
            {data_result.temperature}°
          </span>
        </div>
        <div className='flex flex-col items-center space-y-1'>
          <span className='uppercase'>Humedad</span>
          <Image
            src={'/icon/sensors/prime/humidity.svg'}
            alt='humidity_icon'
            height={24}
            width={24}
          />
          <span className='font-nunito text-slate-800'>
            {data_result.humidity}%
          </span>
        </div>
      </div>
      {/* <div className='my-1 py-3'>
        <Link href={`/map/${device_id_path}`}>
          <button className='px-8 py-3 font-bold border rounded border-gray-400 text-prime w-full hover:bg-prime hover:text-secondary'>
            more detail
          </button>
        </Link>
      </div> */}
    </div>
  );
}
