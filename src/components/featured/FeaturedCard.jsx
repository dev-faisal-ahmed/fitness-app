export default function FeaturedCard({ feature }) {
  const { title, desc, imgUrl, id } = feature;

  return (
    <div
      className={`group relative z-0 flex flex-col rounded-md bg-[#242424] bg-clip-border shadow-md after:absolute after:bottom-0 after:left-0 after:z-[-1] after:w-full after:rounded-md after:bg-primary after:transition-all after:content-[""] hover:text-gray-800  ${
        id === 2
          ? 'text-gray-800 after:h-full'
          : 'text-gray-200 after:h-0 hover:after:h-full'
      }`}
    >
      <div className='p-6'>
        <div className='flex justify-center py-4'>
          <img className='h-20 object-cover' src={imgUrl} />
        </div>
        <h5 className='text-blue-gray-900 mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal antialiased'>
          {title}
        </h5>
        <p
          className={`block font-sans text-base font-light leading-relaxed text-inherit antialiased ${
            id === 2
              ? 'text-gray-800'
              : 'text-gray-300 group-hover:text-gray-800'
          }`}
        >
          {desc.length <= 90 ? desc : desc.slice(0, 90) + '...'}
        </p>
      </div>
      <div className='p-6 pt-0'>
        <a href='#' className='inline-block'>
          <button
            className={`flex select-none items-center gap-2 rounded-lg bg-gray-200/5 px-4 py-2 text-center align-middle font-sans text-xs font-normal transition-all active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ${
              id === 2
                ? 'text-gray-800'
                : 'text-gray-300 group-hover:text-gray-800'
            }`}
            type='button'
          >
            Learn More
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='h-4 w-4'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
              ></path>
            </svg>
          </button>
        </a>
      </div>
    </div>
  );
}
