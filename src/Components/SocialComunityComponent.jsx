
import { curvCandyImg, curvCandyImg2, insta1, insta2, insta3, insta4, insta5, insta6 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const socialData = [
  { image: insta1, icon: FaInstagram, alt: 'Instagram post 1' },
  { image: insta2, icon: FaFacebook, alt: 'Facebook post' },
  { image: insta3, icon: FaTiktok, alt: 'TikTok post' },
  { image: insta4, icon: FaXTwitter, alt: 'X/Twitter post' },
  { image: insta5, icon: FaYoutube, alt: 'YouTube post' },
  { image: insta6, icon: TiSocialPinterest, alt: 'Pinterest post' },
  // Puedes duplicar o añadir más elementos fácilmente
  { image: insta1, icon: FaInstagram, alt: 'Instagram post 2' },
];

const SocialCard = ({ image, alt, Icon }) => (
  <div className='social-card'>
    <Image src={image} alt={alt} className="w-full h-full object-cover" />
    <Icon className='icon' />
  </div>
);

const SocialComunityComponent = () => {
  return (
    <div className='section-social-comunity  py-20 text-center'>
      <div className='z-1'>
        <h2 className="text-5xl font-bold mt-10 text-gray-800">Join Our Social Community</h2>

        <p className="mt-4 mb-6 text-lg text-gray-700">
          Follow us on social media to stay updated with our latest news and offers!
        </p>
      </div>

      <Image
        src={curvCandyImg2}
        alt="curvCandyImg"
        className='absolute -bottom-8 left-0'
      />

      <Swiper
        slidesPerView={6}
        spaceBetween={0}
        loop={true}
        breakpoints={{
          1399: { slidesPerView: 6 },
          1199: { slidesPerView: 5 },
          991: { slidesPerView: 5 },
          575: { slidesPerView: 2 },
          0: { slidesPerView: 2 },
        }}
        className='social-slide'
        style={{ padding: "3% 0" }}
      >
        {socialData.map((item, index) => {
          // Renombramos 'icon' a 'Icon' para que JSX lo reconozca como un componente
          const { image, alt, icon: Icon } = item;
          return (
            <SwiperSlide key={index} className='mt-5 mb-5'>
              <SocialCard image={image} alt={alt} Icon={Icon} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}

export default SocialComunityComponent