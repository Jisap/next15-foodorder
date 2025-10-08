
import { curvCandyImg2, insta1, insta2, insta3, insta4, insta5, insta6 } from '@/assets/images'
import Image from 'next/image'
import React, { useEffect } from 'react'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleText = "Join Our Social Community";
const titleWords = titleText.split(" ");

const titleContainer = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const titleWord = {
  visible: { opacity: 1, y: 0, transition: { type: "spring", damping: 12, stiffness: 100 } },
  hidden: { opacity: 0, y: 20, transition: { type: "spring", damping: 12, stiffness: 100 } },
};

const socialData = [
  { image: insta1, icon: FaInstagram, alt: 'Instagram post 1' },
  { image: insta2, icon: FaFacebook, alt: 'Facebook post' },
  { image: insta3, icon: FaTiktok, alt: 'TikTok post' },
  { image: insta4, icon: FaXTwitter, alt: 'X/Twitter post' },
  { image: insta5, icon: FaYoutube, alt: 'YouTube post' },
  { image: insta6, icon: TiSocialPinterest, alt: 'Pinterest post' },
  { image: insta4, icon: FaXTwitter, alt: 'X/Twitter post' },
  { image: insta2, icon: FaFacebook, alt: 'Facebook post' },
];

const SocialCard = ({ image, alt, Icon }) => (
  <div className='social-card'>
    <Image src={image} alt={alt} className="w-full h-full object-cover" />
    <Icon className='icon' />
  </div>
);

const SocialComunityComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const swiperVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.5 },
    },
  };

  return (
    <div ref={ref} className='section-social-comunity py-20 text-center'>
      <div className='z-1'>
        <motion.h2
          variants={titleContainer}
          initial="hidden"
          animate={controls}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mt-10 text-white [text-shadow:5px_-2px_0_var(--fourth-color)]"
        >
          {titleWords.map((word, index) => (
            <motion.span key={index} variants={titleWord} className="inline-block mr-4">{word}</motion.span>
          ))}
        </motion.h2>

        <p className="mt-4 mb-6 text-lg text-gray-700">
          Follow us on social media to stay updated with our latest news and offers!
        </p>
      </div>

      <Image
        src={curvCandyImg2}
        alt="curvCandyImg"
        className='absolute -bottom-8 left-0'
      />

      <motion.div
        variants={swiperVariants}
        initial="hidden"
        animate={controls}
      >
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          modules={[EffectCoverflow, Autoplay]}
          className='social-slide'
          style={{ padding: "3% 0" }}
        >
          {socialData.map((item, index) => {
            const { image, alt, icon: Icon } = item;
            return (
              <SwiperSlide key={index} className='mt-5 mb-5' style={{ width: '300px', height: '300px' }}>
                <SocialCard image={image} alt={alt} Icon={Icon} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </motion.div>
    </div>
  )
}

export default SocialComunityComponent