import gymGirl from './../../assets/images/gym-girl.jpg';

export default function AboutUs() {
  return (
    <section>
      <div className='mx-auto max-w-7xl px-2 py-10 lg:grid lg:grid-cols-2 lg:gap-4'>
        <div>
          <h2 className='relative text-xl font-semibold uppercase'>
            <span className='text-primary'>About</span> <span>Us</span>
            <span className='absolute top-1/2 ml-4 h-[1px] w-20 -translate-y-1/2 bg-primary'></span>
          </h2>
          <h3 className='mt-2 text-2xl font-semibold uppercase sm:text-3xl md:text-4xl'>
            Your path to health and energy
          </h3>
          <p className='mt-5 text-lg text-white/70'>
            Welcome to Fit-Up, where fitness meets community and your journey to
            a healthier, stronger you begins! Established with a passion for
            transforming lives, our gym is more than just a place to work out -
            it's a hub of inspiration, motivation, and achievement.
          </p>
          <p className='mt-5 text-lg text-white/70'>
            At Fit-Up, we're committed to empowering individuals to embrace a
            lifestyle of wellness. We believe that everyone deserves to lead a
            healthy and active life, and we provide the tools, guidance, and
            support to make that vision a reality.
          </p>
        </div>
        <div className='mt-8 h-60 w-full lg:mt-0 lg:h-auto lg:p-4'>
          <div className='relative h-full w-full overflow-hidden'>
            <img
              src={gymGirl}
              className='absolute inset-0 h-full w-full object-cover grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0'
              alt='gym-girl-aboutus-image'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
