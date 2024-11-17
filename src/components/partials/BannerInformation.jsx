export default function BannerInformation({ condition }) {
  return (
    <div className='flex flex-col p-6 col-span-full row-span-full md:col-span-8 lg:col-span-8 lg:p-10 text-white'>
      <h1 className='text-3xl font-semibold font-sora '>
        {
          {
            good: 'Clean Air!',
            moderate: 'Pretty Good!',
            unhealthy: 'Polluted Air!',
            'very unhealthy': 'Unacceptable Air!',
            dangerous: 'Hazardous Air!',
          }[condition]
        }
      </h1>
      <p className='flex-1 pt-2 font-manrope font-medium text-sm'>
        {
          {
            good: `Today's air is very good by all circles, you can go outside without fear of the air!`,
            moderate: `Today's air is still acceptable and breathable by most people, not so bad!`,
            unhealthy: `Today's air is quite bad. You may experience health effects if you continue to be exposed to the surrounding air!`,
            'very unhealthy': `The air here is mostly polluted, it is not recommended to leave the house or approach the surrounding area!`,
            dangerous: `Everyone without exception may experience more serious health effects if they continue to be here!`,
          }[condition]
        }
      </p>
    </div>
  );
}
