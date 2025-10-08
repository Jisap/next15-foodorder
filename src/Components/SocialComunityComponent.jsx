
import { curvCandyImg, curvCandyImg2, insta1, insta2, insta3, insta4, insta5, insta6 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { TiSocialPinterest } from "react-icons/ti";
import { FaXTwitter } from "react-icons/fa6";

const SocialComunityComponent = () => {
  return (
    <div className='section-social-comunity  py-20 text-center'>
      <h2 className="text-5xl font-bold mt-10 text-gray-800">Join Our Social Community</h2>

      <p className="mt-4 text-lg text-gray-700">
        Follow us on social media to stay updated with our latest news and offers!
      </p>

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
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta1}
              alt="insta1"
            />
            <FaInstagram />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta2}
              alt="insta1"
            />
            <FaFacebook />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta3}
              alt="insta1"
            />
            <FaTiktok />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta4}
              alt="insta1"
            />
            <FaXTwitter />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta5}
              alt="insta1"
            />
            <FaYoutube />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta6}
              alt="insta1"
            />
            <TiSocialPinterest />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='social-card'>
            <Image
              src={insta1}
              alt="insta1"
            />
            <FaInstagram />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SocialComunityComponent