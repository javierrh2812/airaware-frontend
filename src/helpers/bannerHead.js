export const renderIcon = (value, compareData) => {
  if (compareData) {
    if (value - compareData > 0) {
      return (
        <span className={`bg-red-500 px-2 py-1 rounded`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth={2}
          >
            <title>increase</title>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M7 11l5-5m0 0l5 5m-5-5v12'
            />
          </svg>
        </span>
      );
    } else if (value - compareData < 0) {
      return (
        <span className={`bg-green-500 px-2 py-1 rounded`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth={2}
          >
            <title>decrease</title>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M17 13l-5 5m0 0l-5-5m5 5V6'
            />
          </svg>
        </span>
      );
    } else {
      return (
        <span className={`bg-prime px-1.5 py-1 rounded`}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
            strokeWidth={2}
          >
            <title>stable</title>
            <path strokeLinecap='round' strokeLinejoin='round' d='M20 12H4' />
          </svg>
        </span>
      );
    }
  } else {
    // do something
    return (
      <span className={`bg-prime px-1.5 py-1 rounded`}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-6 w-6'
          fill='none'
          viewBox='0 0 24 24'
          stroke='white'
          strokeWidth={2}
        >
          <title>stable</title>
          <path strokeLinecap='round' strokeLinejoin='round' d='M20 12H4' />
        </svg>
      </span>
    );
  }
};
