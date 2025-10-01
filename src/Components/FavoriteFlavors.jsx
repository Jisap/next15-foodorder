

"use client";

import {
  Flavor1,
  Flavor2,
  Flavor3,
  Flavor4,
  Flavor5,
  Flavor6,
  Flavor7,
  garpsImg,
  sectionElm1,
  sectionElm2,
  sectionElm3,
  sectionElm4
} from '@/assets/images'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';


const flavorsData = [
  {
    img: Flavor1,
    alt: "Avocado Smoothie",
    title: "Avocado",
    varieties: "14+ Varieties",
    imgClass: "flavor-img1" // Aunque no existe, es bueno para la consistencia
  },
  {
    img: Flavor2,
    alt: "Twisted Smoothie",
    title: "Twisted",
    varieties: "12+ Varieties",
    imgClass: "flavor-img2"
  },
  // Añade más sabores aquí para que aparezcan automáticamente en el carrusel
  {
    img: Flavor3,
    alt: "Strawberry Smoothie",
    title: "Strawberry",
    varieties: "42+ Varieties",
    imgClass: "flavor-img3"
  },
  {
    img: Flavor4,
    alt: "Blackberry Smoothie",
    title: "Blackberry",
    varieties: "38+ Varieties",
    imgClass: "flavor-img4"
  },
  {
    img: Flavor5,
    alt: "Ice Latte",
    title: "Ice Latte",
    varieties: "52+ Varieties",
    imgClass: "flavor-img5"
  },
  {
    img: Flavor6,
    alt: "Coco Smoothie",
    title: "Coco",
    varieties: "25+ Varieties",
    imgClass: "flavor-img6"
  },
  {
    img: Flavor7,
    alt: "Banana Smoothie",
    title: "Banana",
    varieties: "18+ Varieties",
    imgClass: "flavor-img7"
  }
];

const FlavorCard = ({ img, alt, title, varieties, imgClass }) => (
  <div className='flavor-card group flex flex-col items-center justify-center text-center cursor-pointer'>
    <div className={`flavor-img ${imgClass}`}>
      <Image src={img} alt={alt} width={340} height={340} />
    </div>
    <div className='flavor-info mt-5 w-full text-start font-kaushan'>
      <h1 className='text-4xl font-bold text-gray-800 transition-all duration-300 group-hover:[text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]'>{title}</h1>
      <p className='text-lg text-gray-800 transition-all duration-300 group-hover:[text-shadow:1px_1px_3px_rgba(0,0,0,0.4)]'>{varieties}</p>
    </div>
  </div>
);

const FavoriteFlavors = () => {

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const titleText = "Favorite Flavors";
  const titleWords = titleText.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariant = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  const titleWord = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 120 },
    },
  };

  const swiperVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8, // Aumentamos la duración para que sea más suave
        ease: "easeOut", // Una curva de desaceleración agradable
        delay: 0.5, // Ajustamos el retraso para que siga al título
      },
    },
  };

  return (
    <div 
      ref={ref} 
      className='section favorite-flavors relative overflow-hidden pb-[180px] pt-[100px]'
    >
      <Image src={sectionElm1} alt='Elemento decorativo' width={150} height={150} className='section-elm section-elm1 absolute -left-10 top-1/4 z-23' />
      <Image src={sectionElm2} alt='Elemento decorativo' width={150} height={150} className='section-elm section-elm2 absolute -right-10 top-1/2 z-23' />

      <motion.div 
        variants={container}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className='relative z-30 flex flex-col items-center justify-center'
      >
        <motion.div variants={imageVariant}>
          <Image src={garpsImg} alt='Grapes' width={150} height={150} className='z-25' />
        </motion.div>
        <h1 className='font-fraunces text-7xl font-bold text-gray-800 [text-shadow:5px_-2px_0_var(--orange-color)]'>
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={titleWord} className="inline-block mr-4">
              {word}
            </motion.span>
          ))}
        </h1>
      </motion.div>

      <motion.div 
        initial="hidden" 
        animate={inView ? "visible" : "hidden"}
        variants={swiperVariant} 
        className='mt-20'
      >
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
          className='flavor-swiper w-full'
        >
          {flavorsData.map((flavor, index) => (
            <SwiperSlide key={index}>
              <FlavorCard {...flavor} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default FavoriteFlavors