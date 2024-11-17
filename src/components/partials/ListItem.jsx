export default function ListItem({ item }) {
  return (
    <div className='max-w-xs overflow-hidden rounded-md shadow-lg bg-prime text-gray-100'>
      <div className='flex justify-between p-4'>
        <div className='flex flex-col flex-1 gap-4'>
          <div className='flex justify-between'>
            <div className='flex gap-1'>
              <span className='text-2xl font-semibold font-sora'>
                {item.device_name}
              </span>
            </div>
            <svg
              className='svg-icon h-12 w-12'
              style={{
                verticalAlign: 'middle',
                fill: 'currentColor',
                overflow: 'hidden',
              }}
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M466.2848 391.9104l34.1632-71.5008a12.8 12.8 0 0 1 23.104 0l34.1632 71.5008H819.2a32 32 0 0 1 32 32V806.4a32 32 0 0 1-32 32H204.8a32 32 0 0 1-32-32V423.9104a32 32 0 0 1 32-32h261.4848zM236.8 455.6928v318.9248h550.4V455.6928H236.8z m128 229.6256c-38.88 0-70.4-31.4112-70.4-70.1632 0-38.752 31.52-70.1632 70.4-70.1632s70.4 31.4112 70.4 70.1632c0 38.752-31.52 70.1632-70.4 70.1632z m246.4-140.3264a22.4 22.4 0 0 1 22.4 22.4v95.5264a22.4 22.4 0 1 1-44.8 0V567.392a22.4 22.4 0 0 1 22.4-22.4z m89.6 0a22.4 22.4 0 0 1 22.4 22.4v95.5264a22.4 22.4 0 1 1-44.8 0V567.392a22.4 22.4 0 0 1 22.4-22.4z m-320.3968-261.376a32.0576 32.0576 0 0 1-43.5392-12.3072 31.8336 31.8336 0 0 1 12.352-43.392c101.12-56.256 212.224-56.256 330.016-1.0112a31.8464 31.8464 0 0 1 15.328 42.432 32.0448 32.0448 0 0 1-42.5792 15.2832c-99.8144-46.8096-189.2352-46.8096-271.5776-1.0112z'
                fill='#EFFFFD'
              />
            </svg>
          </div>
        </div>
        <div className='text-sm leading-loose'>
          <div className='flex items-center' />
        </div>
      </div>
      <div className='flex items-center justify-between gap-8 p-4 border-t text-gray-100 border-gray-700'>
        <div className='flex items-center space-x-1'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            strokeWidth={2}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
            />
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
            />
          </svg>
          <span className='text-sm font-nunito'>
            {item.device_location_name}
          </span>
        </div>
        <div className='flex items-center space-x-1'>
          <strong
            className={`${
              item.status == false
                ? 'border-red-500 bg-red-500 border'
                : 'border-green-500 bg-green-500 border'
            } text-white uppercase px-2 py-1 rounded-md text-[10px] font-sora`}
          >
            {item.status == true ? 'Active' : 'Inactive'}
          </strong>
        </div>
      </div>
    </div>
  );
}
