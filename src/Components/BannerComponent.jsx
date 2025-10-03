import { bannerIcon1 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const BannerComponent = () => {
  return (
    <div className='section-banner'>
      <div className='banner-content flex flex-col justify-center items-center h-[1000px]'>
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
        </div>
      </div>
    </div>
  )
}

export default BannerComponent