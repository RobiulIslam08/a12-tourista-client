/* eslint-disable react/no-unescaped-entities */

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import './styles.css';

// import required modules
import { Pagination, Navigation,Autoplay } from 'swiper/modules';
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
        modules={[Pagination, Navigation,Autoplay]}
    
        className="mySwiper h-[200px] mt-20 md:h-[400px] lg:h-[500px]"
      >
        <SwiperSlide>
       
          <div className='relative'>
            <img className='w-full bg-cover h-full  object-cover'
              src="
              https://i.ibb.co/30N26nq/sea-beach.jpg"
              loading="lazy"
            />
         
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'> 
            <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>Cox's Bazar</p>
        <p className='text-center text-sm lg:text-base'> <h1  >
        Our{' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['we excel in diagnosing and resolving a wide array of issues affecting desktops and laptops']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1></p>
        
              </div>
            </div>
   
          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"> </div>
         
        </SwiperSlide>
        <SwiperSlide>
          <div className='relative'>
            <img
              className='w-full  object-cover'
              src="https://i.ibb.co/zf5KjGd/pexels-lastly-719399.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
            
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>  Mobile Servicing </p>
        <p className='text-center text-sm lg:text-base'>
        <h1  >
        {' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['phone repair entails expert diagnosis and resolution of issues plaguing mobile devices like smartphones and tablets.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
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
          <div className='relative'>
            <img
              className='w-full bg-cover  object-fill'
              src="https://i.ibb.co/8d2V4jb/pexels-zeleboba-4211136.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'>
              <div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>Monitor Servicing</p>
        <p className='text-center text-sm lg:text-base'>
        <h1  >
        {' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={['I will inspect your monitor for any visible signs of damage or wear.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
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
          <div className='relative'>
            <img
              className='w-full bg-cover  object-cover'
              src="https://i.ibb.co/7RwTRX7/pexels-it-services-eu-9278798-7639370.jpg"
              loading="lazy"
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent  flex justify-center items-center md:h-[400px]  h-[200px] lg:h-[500px] text-white font-bold text-[22px] lg:text-3xl'><div className='flex justify-center items-center flex-col lg:gap-3 w-1/2'>
                <p className='text-purple-500'>  Laptop Serivicing</p>
        <p className='text-center text-sm lg:text-base'>
        <h1  >
        We{' '}
        <span style={{ color: '', fontWeight: 'bold' }}>
          {/* Style will be inherited from the parent element */}
          <Typewriter

            words={[' we specialize in diagnosing and repairing various issues affecting laptops.']}
            loop={false}
            cursor
            cursorStyle='_'
            typeSpeed={20}
            deleteSpeed={30}
            delaySpeed={1000}
            // onLoopDone={handleDone}
            // onType={handleType}
          />
        </span>
      </h1>
        </p>
        
              </div></div>

          </div>
          <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
        </SwiperSlide>
    

      </Swiper>

    </>
  );
};

export default Banner;


// https://i.ibb.co/y05nQNT/6560cb78a3727966adfbf2b8-356119658.jpg
// https://i.ibb.co/t8B1TdN/Nilgiri.jpg
// https://i.ibb.co/3CYtPYc/images-2.jpg
// https://i.ibb.co/7t9zb9N/Exploring-Coxs-Bazar.jpg