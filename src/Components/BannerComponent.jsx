import { banner2, bannerIcon1, bannerIcon2, bannerIcon3 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const BannerComponent = () => {
  return (
    <div className='section-banner after:hidden lg:after:block'>
      <div className='banner-content relative flex flex-col justify-center items-center h-[1000px] lg:h-[800px] '>
        <div className='flex flex-col text-center '>
          <h1 className='text-5xl font-fraunces font-bold text-white'>
            Get 20% off
          </h1>

          <h1 className='text-5xl font-fraunces font-bold text-white'>
            on All Organic Juices
          </h1>

          <p className='text-lg text-white mt-5'>
            All organic juices are made with fresh, organic, and locally sourced ingredients.
            They are free from pesticides, herbicides, and other harmful chemicals.
          </p>
        </div>

        <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
          <div className='flex flex-col items-center justify-center gap-2'>
            <Image 
              src={bannerIcon1}
              alt='Banner icon 1'
              width={100}
              height={100}
            />

            <h1 className='text-4xl font-bold font-fraunces text-white'>
              32%
            </h1>

            <p className='text-white text-lg font-bold'>
              Juices
            </p>
          </div>

          <div className='flex flex-col items-center justify-center gap-2'>
            <Image 
              src={bannerIcon2}
              alt='Banner icon 2'
              width={100}
              height={100}
            />

            <h1 className='text-4xl font-bold font-fraunces text-white'>
              99%
            </h1>

            <p className='text-white text-lg font-bold'>
              Sugar Free Juices
            </p>
          </div>

          <div className='flex flex-col items-center justify-center gap-2 z-50'>
            <Image
              src={bannerIcon3}
              alt='Banner icon 3'
              width={100}
              height={100}
            />

            <h1 className='text-4xl font-bold font-fraunces text-white'>
              58%
            </h1>

            <p className='text-white text-lg font-bold'>
              Fruit Punch
            </p>
          </div>
        </div>

        <div className='mt-8 flex justify-center items-center z-50'>
          <button className='bg-[#ff679a] px-8 py-3 pb-4 text-xl rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
            View More Juices
          </button>
        </div>

        <Image 
          src={banner2}
          alt="banner2"
          className='banner-2 
            bottom-20 w-[280px] right-5  
            sm:right-5 sm:w-[400px] sm:bottom-15
            md:w-[400px] md:right-5 md:bottom-15
            lg-custom:right-0
            lg:bottom-20 lg:right-5 lg:w-[400px] 
            xl:w-[400px] xl:bottom-25 xl:right-5 
            2xl:w-[500px] 2xl:bottom-30 2xl:right-10'
        />
      </div>
    </div>
  )
}

export default BannerComponent