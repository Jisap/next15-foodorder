import { garpsImg, quat, test1, test2, test3, test4 } from "@/assets/images"
import Image from "next/image"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';


const testimonialsData = [
  {
    text: "¡Absolutamente deliciosos! Los zumos son increíblemente frescos y me dan la energía que necesito para empezar mis mañanas. Como profesora, mis días son ajetreados, y esto es justo lo que necesitaba.",
    author: "Laara",
    role: "Teacher",
    image: test1,
  },
  {
    text: "La calidad de los ingredientes es evidente en cada sorbo. Se nota que utilizan productos orgánicos y frescos. Una excelente inversión en mi salud y bienestar. ¡Totalmente recomendado!",
    author: "Karen",
    role: "Economist",
    image: test2,
  },
  {
    text: "Perfecto para mis largas noches de estudio. Un zumo de estos me ayuda a mantenerme concentrado y con energía sin tener que recurrir a bebidas azucaradas. El de sandía es mi favorito.",
    author: "Greg",
    role: "Student",
    image: test3,
  },
  {
    text: "Como desarrolladora, paso muchas horas frente a la pantalla. Tomarme un descanso con uno de estos smoothies es la mejor parte de mi día. Son refrescantes, sabrosos y muy saludables.",
    author: "Jasmine",
    role: "Developer",
    image: test4,
  },
];

const TestimonialsComponent = () => {
  return (
    <div className="section-testimonials pb-[100px] px-[8%] lg:px-[12%]">
      <div className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <h1 className="font-bold font-fraunces text-5xl sm:text-6xl md:text-7xl mt-12 text-white [text-shadow:5px_-2px_0_var(--fourth-color)]">
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
              <div className="test-image lg:w-6/12 w-full z-22">
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