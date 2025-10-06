import { garpsImg, quat, test1, test2, test3 } from "@/assets/images"
import Image from "next/image"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const TestimonialsComponent = () => {
  return (
    <div className="section-testimonials pb-[100px] px-[8%] lg:px-[12%]">
      <div className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <h1 className="font-bold font-fraunces text-6xl">
          Testimonials
        </h1>
      </div>

      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="mt-10"
      >
        <SwiperSlide>
          <div className="test-card flex flex-col items-center lg:flex-row gap-12">
            <div className="text-content lg:w-8/12 w-full">
              <p className="text-white text-lg test-pere">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                  ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in 
                  voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              </p>

              <div className="test-box flex justify-between">
                <div className="test-info flex items-center gap-3 mt-4 text-white">
                  <h2 className="text-3xl font-bold">
                    Laara
                  </h2>

                  <p className="m-0 pt-2">- Teacher</p>
                </div>

                <Image 
                  src={quat}
                  alt="quat"
                  className="mr-10"
                />
              </div>
            </div>
            <div className="test-image lg:w-4/12 w-full">
              <Image 
                src={test1} alt="test1" className="rounded-full"
              />
              <Image 
                src={garpsImg} 
                alt="garpsImg" 
                className="absolute bottom-0 left-50"
                style={{
                  width: "200px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test-card flex flex-col items-center lg:flex-row gap-12">
            <div className="text-content lg:w-8/12 w-full">
              <p className="text-white text-lg test-pere">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="test-box flex justify-between">
                <div className="test-info flex items-center gap-3 mt-4 text-white">
                  <h2 className="text-3xl font-bold">
                    Karen
                  </h2>

                  <p className="m-0 pt-2">- Economist</p>
                </div>

                <Image
                  src={quat}
                  alt="quat"
                  className="mr-10"
                />
              </div>
            </div>
            <div className="test-image lg:w-4/12 w-full">
              <Image
                src={test2} alt="test1" className="rounded-full"
              />
              <Image
                src={garpsImg}
                alt="garpsImg"
                className="absolute bottom-0 left-50"
                style={{
                  width: "200px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="test-card flex flex-col items-center lg:flex-row gap-12">
            <div className="text-content lg:w-8/12 w-full">
              <p className="text-white text-lg test-pere">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>

              <div className="test-box flex justify-between">
                <div className="test-info flex items-center gap-3 mt-4 text-white">
                  <h2 className="text-3xl font-bold">
                    Greg
                  </h2>

                  <p className="m-0 pt-2">- Student</p>
                </div>

                <Image
                  src={quat}
                  alt="quat"
                  className="mr-10"
                />
              </div>
            </div>
            <div className="test-image lg:w-4/12 w-full">
              <Image
                src={test3} alt="test1" className="rounded-full"
              />
              <Image
                src={garpsImg}
                alt="garpsImg"
                className="absolute bottom-0 left-50"
                style={{
                  width: "200px"
                }}
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default TestimonialsComponent