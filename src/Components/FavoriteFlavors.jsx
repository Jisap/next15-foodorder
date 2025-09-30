import { Flavor1, Flavor2, Flavor3, Flavor4, Flavor5, garpsImg, sectionElm1, sectionElm2 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const flavorsData = [
  {
    img: Flavor1,
    alt: "Avocado Smoothie",
    title: "Avocado",
    varieties: "14+ Varieties"
  },
  {
    img: Flavor2,
    alt: "Twisted Smoothie",
    title: "Twisted",
    varieties: "12+ Varieties"
  },
  // Añade más sabores aquí para que aparezcan automáticamente en el carrusel
  {
    img: Flavor3,
    alt: "Grapes Smoothie",
    title: "Grapes",
    varieties: "25+ Varieties"
  },
  {
    img: Flavor4,
    alt: "Arandanos Smoothie",
    title: "Arandanos",
    varieties: "12+ Varieties"
  },
  {
    img: Flavor5,
    alt: "Cafe Smoothie",
    title: "Cafe",
    varieties: "14+ Varieties"
  },
  {
    img: Flavor3,
    alt: "Grapes Smoothie",
    title: "Grapes",
    varieties: "25+ Varieties"
  },
];

const FlavorCard = ({ img, alt, title, varieties }) => (
  <div className='flavor-card flex flex-col items-center justify-center text-center'>
    <div className='flavor-img'>
      <Image src={img} alt={alt} width={340} height={340} />
    </div>
    <div className='flavor-info mt-5 w-full text-start'>
      <h1 className='text-4xl font-bold text-gray-800'>{title}</h1>
      <p className='text-lg text-gray-800'>{varieties}</p>
    </div>
  </div>
);

const FavoriteFlavors = () => {
  return (
    <div className='relative overflow-hidden pb-[180px] pt-[100px]'>
      <Image src={sectionElm1} alt='Elemento decorativo' width={150} height={150} className='absolute -left-10 top-1/4 -z-10' />
      <Image src={sectionElm2} alt='Elemento decorativo' width={150} height={150} className='absolute -right-10 top-1/2 -z-10' />
      
      <div className='flex flex-col items-center justify-center'>
        <Image src={garpsImg} alt='Grapes' width={150} height={150} />
        <h1 className='font-fraunces text-7xl font-bold text-gray-800'>
          Favorite Flavors
        </h1>
      </div>

      <div className='mt-20'>
        <Swiper
          slidesPerView={5.5}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1000}
          modules={[Autoplay]}
          breakpoints={{
            1399: { slidesPerView: 5.5 },
            1199: { slidesPerView: 5.5 },
            991: { slidesPerView: 3.5 },
            575: { slidesPerView: 2 },
            0: { slidesPerView: 2 },
          }}
          className='w-full'
        >
          {flavorsData.map((flavor, index) => (
            <SwiperSlide key={index}>
              <FlavorCard {...flavor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default FavoriteFlavors