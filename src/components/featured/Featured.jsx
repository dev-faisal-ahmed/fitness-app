import FeaturedCard from './FeaturedCard';
import servicesdata from './data';

export default function Featured() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-2'>
        <div className='py-10'>
          <h1 className='relative text-center text-xl font-semibold after:absolute after:left-0 after:top-1/2 after:h-[1px] after:w-full after:-translate-y-1/2 after:bg-primary after:content-[""] sm:text-2xl lg:text-3xl'>
            <span className='relative z-10 bg-background px-4'>
              <span className='text-primary'>Featured</span>{' '}
              <span>Section</span>
            </span>
          </h1>
        </div>
        <div className='grid grid-cols-1 justify-between gap-4 py-10 md:grid-cols-2 xl:grid-cols-3'>
          {servicesdata.map((service) => (
            <FeaturedCard key={service.id} feature={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
