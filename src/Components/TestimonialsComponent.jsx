import { garpsImg, test1, test2, test3, test4 } from "@/assets/images"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { Autoplay, EffectFade } from "swiper/modules"
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { Quote } from "lucide-react"


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

const TestimonialCard = ({ testimonial }) => {
  const { isActive } = useSwiperSlide();

  const contentVariants = {
    inactive: { opacity: 0, x: -100 },
    active: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.7, delay: 0.6, ease: "easeOut" }
    },
  };

  const imageVariants = {
    inactive: { opacity: 0, scale: 0.8 },
    active: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.7, delay: 0.6, ease: "easeOut" }
    },
  };

  return (
    <div className="test-card flex flex-col items-center lg:flex-row gap-12">
      <motion.div
        className="text-content lg:w-8/12 w-full pl-4 md:pl-6 flex flex-col justify-center"
        variants={contentVariants}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      >
        <blockquote className="flex gap-4">
          <Quote 
            className="text-white size-10 md:size-12 flex-shrink-0" 
            style={{ transform: 'scaleX(-1)' }}
            aria-hidden="true"
          />

          <div>
            <p className="text-white max-w-xl text-lg test-pere mt-15">
              {testimonial.text}
            </p>
            <div className="test-box flex justify-between items-center mt-4">
              <div className="test-info flex items-center gap-3 text-white">
                <h2 className="text-3xl font-bold">{testimonial.author}</h2>
                <p className="m-0 pt-2">{testimonial.role}</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-end">
            <Quote className="text-white size-10 md:size-12 flex-shrink-0" aria-hidden="true" />
          </div>
        </blockquote>
      </motion.div>

      <motion.div 
        className="test-image relative lg:w-8/12 h-full w-full"
        variants={imageVariants}
        initial="inactive"
        animate={isActive ? "active" : "inactive"}
      >
        <Image 
          src={testimonial.image} 
          alt={testimonial.author} 
          className="testimonial-author-image" 
        />

        <Image 
          src={garpsImg} 
          alt="garpsImg" 
          className="garspimage" 
        />
      </motion.div>
    </div>
  );
};

const TestimonialsComponent = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <div className="section-testimonials pb-[100px] px-[8%] lg:px-[12%]">
      <div ref={ref} className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <motion.h1
          className="font-bold font-fraunces text-5xl sm:text-6xl md:text-7xl mt-12 text-white [text-shadow:5px_-2px_0_var(--fourth-color)]"
          variants={titleVariants}
          initial="hidden"
          animate={controls}
        >
          Testimonials
        </motion.h1>
      </div>

      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: true,
        }}
        className="mt-10"
      >
        {testimonialsData.map((testimonial, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default TestimonialsComponent