import { banner2, bannerIcon1, bannerIcon2, bannerIcon3 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'

// Creamos una versión animable del componente Image de Next.js
const MotionImage = motion(Image);

const statsData = [
  { icon: bannerIcon1, alt: 'Banner icon 1', percentage: '32%', text: 'Juices' },
  { icon: bannerIcon2, alt: 'Banner icon 2', percentage: '99%', text: 'Sugar Free Juices' },
  { icon: bannerIcon3, alt: 'Banner icon 3', percentage: '58%', text: 'Fruit Punch' }
];

// Variantes para la animación de las tarjetas de estadísticas
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Retraso de 0.3s entre cada tarjeta
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const BannerComponent = () => {
  return (
    <div className='section-banner after:hidden lg:after:block'>
      <div className='banner-content relative flex flex-col justify-center items-center h-[1000px] lg:h-[800px] '>
        <motion.div 
          className='flex flex-col text-center '
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className='text-5xl font-fraunces font-bold text-white'>
            Get 20% off
          </h1>

          <h1 className='text-5xl font-fraunces font-bold text-white'>
            on All Organic Juices
          </h1>

          <p className='text-lg text-white mt-5'>
            All organic juices are made with fresh, organic, and locally sourced ingredients.<br/> 
            They are free from pesticides, herbicides, and other harmful chemicals.
          </p>
        </motion.div>

        <motion.div 
          className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 z-50'
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {statsData.map((stat, index) => (
            <motion.div key={index} className='flex flex-col items-center justify-center gap-2' variants={itemVariants}>
              <Image 
                src={stat.icon}
                alt={stat.alt}
                width={100}
                height={100}
              />
              <h1 className='text-4xl font-bold font-fraunces text-white'>
                {stat.percentage}
              </h1>
              <p className='text-white text-lg font-bold'>
                {stat.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className='mt-8 flex justify-center items-center z-50'
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.8, ease: "easeOut" }}
        >
          <button className='bg-[#ff679a] px-8 py-3 pb-4 text-xl rounded-full text-white hover:bg-white hover:text-black transition-all duration-300 ease-in-out'>
            View More Juices
          </button>
        </motion.div>

        <MotionImage 
          src={banner2}
          alt="banner2"
          className='absolute right-5 bottom-20 w-[280px] sm:w-[400px] sm:bottom-15 lg:bottom-20 xl:bottom-25 2xl:w-[500px] 2xl:bottom-30 2xl:right-10'
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </div>
  )
}

export default BannerComponent