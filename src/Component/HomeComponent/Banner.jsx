/* eslint-disable react/no-unescaped-entities */
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Typewriter } from 'react-simple-typewriter';

const Banner = () => {
  return (
    <>
      <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        lazy={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        // autoplay={{ delay: 5000 }}
        className="mySwiper h-[500px] mt-20"
      >
        <SwiperSlide>
          <div className='relative h-full'>
            <img
              className='w-full h-full object-cover'
              src="https://i.ibb.co/30N26nq/sea-beach.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center h-full text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500 text-center'>Cox's Bazar Beach Retreat</p>
                <p className='text-center text-sm lg:text-base'>
                  <h1>
                  Experience{' '}
                    <span style={{ color: '', fontWeight: 'bold' }}>
                      <Typewriter
                        words={[' the longest natural sea beach in the world at Coxs Bazar. Enjoy the golden sand, crystal clear water, and vibrant local culture.']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={20}
                        deleteSpeed={30}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative h-full'>
            <img
              className='w-full h-full object-cover'
              src="https://i.ibb.co/pZZTsm4/rangamati.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center h-full text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500 text-center'>Rangamati Cultural Exploration</p>
                <p className='text-center text-sm lg:text-base'>
                  <h1>
                    <span style={{ color: '', fontWeight: 'bold' }}>
                      <Typewriter
                        words={['Explore the ancient ruins of Mahasthangarh, the oldest city in Bangladesh, and delve into its rich history and archaeological significance.']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={20}
                        deleteSpeed={30}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative h-full'>
            <img
              className='w-full h-full object-cover'
              src="https://i.ibb.co/yfk4cMP/river-runs-through-jungle.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center h-full text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500 text-center'>Sundarbans Mangrove Forest Adventure</p>
                <p className='text-center text-sm lg:text-base'>
                  <h1>
                    <span style={{ color: '', fontWeight: 'bold' }}>
                      <Typewriter
                        words={['Join an adventure into the Sundarbans, the largest mangrove forest in the world, home to the majestic Bengal tiger and diverse wildlife.']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={20}
                        deleteSpeed={30}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>

        <SwiperSlide>
          <div className='relative h-full'>
            <img
              className='w-full h-full object-cover'
              src="https://i.ibb.co/NY0w7SJ/hiker-mountainous-landscape.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center h-full text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500 text-center'>Bandarban Mountain Trekking</p>
                <p className='text-center text-sm lg:text-base'>
                  <h1>
                    We{' '}
                    <span style={{ color: '', fontWeight: 'bold' }}>
                      <Typewriter
                        words={['Trek through the scenic mountains of Bandarban, known for its stunning landscapes, waterfalls, and indigenous cultures.']}
                        loop={false}
                        cursor
                        cursorStyle='_'
                        typeSpeed={20}
                        deleteSpeed={30}
                        delaySpeed={1000}
                      />
                    </span>
                  </h1>
                </p>
              </div>
            </div>
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
