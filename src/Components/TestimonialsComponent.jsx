import { garpsImg, quat, test1, test2, test3, test4 } from "@/assets/images"
import Image from "next/image"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const testimonialsData = [
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Laara",
    role: "Teacher",
    image: test1,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Karen",
    role: "Economist",
    image: test2,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Greg",
    role: "Student",
    image: test3,
  },
  {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    author: "Jasmine",
    role: "Developer",
    image: test4,
  },
];

const TestimonialsComponent = () => {
  return (
    <div className="section-testimonials pb-[100px] px-[8%] lg:px-[12%]">
      <div className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <h1 className="font-bold font-fraunces text-6xl mt-12">
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
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <div className="test-card flex flex-col items-center lg:flex-row gap-12">
              <div className="text-content lg:w-8/12 w-full">
                <p className="text-white text-lg test-pere">
                  "{testimonial.text}
                </p>
  
                <div className="test-box flex justify-between">
                  <div className="test-info flex items-center gap-3 mt-4 text-white">
                    <h2 className="text-3xl font-bold">
                      {testimonial.author}
                    </h2>
  
                    <p className="m-0 pt-2">- {testimonial.role}</p>
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
                  src={testimonial.image} 
                  alt={testimonial.author} 
                />
                <Image 
                  src={garpsImg} 
                  alt="garpsImg" 
                  className="absolute bottom-0 left-0"
                  style={{
                    width: "200px"
                  }}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialsComponent