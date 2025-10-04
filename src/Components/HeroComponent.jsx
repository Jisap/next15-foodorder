import React from "react";
import Image from "next/image";
import { elm1, elm2, elm4, elm5, elm6, elm7, elm8, listItem, maskImage} from "@/assets/images.js";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

const decorativeElements = [
  { src: elm1, alt: "Elemento decorativo 1", className: "absolute top-[85%] left-[70%] lg:left-[65%] w-[100px] lg:w-[120px] h-auto object-contain" },
  { src: elm2, alt: "Elemento decorativo 2", className: "hidden lg:block absolute top-[10%] left-[40%] w-[150px] h-[150px] animate-[Anim-TB_3s_forwards_infinite]" },
  { src: elm4, alt: "Elemento decorativo 4", className: "absolute top-[16%] left-[75%] w-[100px] h-auto z-[1] animate-[Anim-TB_5s_forwards_infinite]" },
  { src: elm4, alt: "Elemento decorativo 4", className: "absolute top-[16%] left-[10%] w-[60px] h-auto z-[1] animate-[Anim-TB_3s_forwards_infinite]" },
  { src: elm5, alt: "Elemento decorativo 5", className: "absolute bottom-[2%] -left-[5%] w-[200px] md:w-[300px] lg:w-[420px] h-auto object-contain" },
  { src: elm6, alt: "Elemento decorativo 6", className: "absolute bottom-[2%] left-[15%] w-[150px] md:w-[200px] lg:w-[250px] h-auto object-contain" },
  { src: elm8, alt: "Elemento decorativo 8", className: "absolute top-[50%] left-[80%] md:left-[80%] lg:left-[85%] xl:left-[88%] w-[100px] md:w-[150px] xl:w-[180px] h-auto z-[1] animate-[Anim-half-rotate_10s_linear_infinite]" },
  { src: elm7, alt: "Elemento decorativo 7", className: "hidden lg:block absolute top-[68%] left-[80%] w-[300px] h-auto z-[1]" },
  { src: elm1, alt: "Elemento decorativo 1", className: "hidden md:block absolute top-[80%] left-[30%] w-[120px] h-auto rotate-180" },
];

const benefits = [
  "Enhance Immunity",
  "Reduce Inflammation",
  "Reduces the risks of diabetes",
  "Reduces Sugar Risks",
  "Enhance Your Eyesight",
  "Boosts Energy Levels"
];

// https://html-css-js.com/css/generator/text-shadow/
const BenefitItem = ({ text, index }) => (
  <p 
    className="flex items-center gap-2 text-base sm:text-lg text-white rounded-full px-3 py-1 [text-shadow:0_1px_0_#000,0_0_6px_rgba(0,0,0,0.7)] animate-fade-in-up"
    style={{
      animationDelay: `${0.8 + index * 0.1}s`,
      animationFillMode: "backwards",
    }}>
    <Image 
      src={listItem}
      alt="Checkmark icon"
      width={20}
      height={20}
    />
    {text}
  </p>
);

const HeroComponent = () => {
  return (
    <div 
      className="hero relative flex h-screen w-full items-center justify-center overflow-x-hidden bg-[var(--prim-color)] text-center
      after:absolute after:left-0 after:top-0 after:h-full after:w-full after:[background-color:var(--second-color)] after:content-[''] after:mask-[url(../assets/hero-mask.png)] after:mask-position-[top_right] after:mask-no-repeat after:mask-size-[35%_90%]"
    >
      {decorativeElements.map((el, index) => (
        <Image
          key={index}
          src={el.src}
          alt={el.alt}
          width={150} // El tamaño real se controla con las clases de Tailwind
          height={150}
          className={el.className}
          priority={index < 3} // Prioriza la carga de las primeras imágenes
        />
      ))}

      <div className="hero-content z-10 px-4">
        <AnimatedTextCharacter
          text="Delicious"
          className="font-fraunces font-bold italic text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[4.5rem] sm:leading-[5.5rem] md:leading-[6.5rem] lg:leading-[10rem] text-[var(--fourth-color)] [text-shadow:5px_-2px_0_var(--white-color)]"
        />
        <AnimatedTextCharacter
          text="Smoothies"
          className="font-fraunces font-bold italic text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-[4.5rem] sm:leading-[5.5rem] md:leading-[6.5rem] lg:leading-[10rem] text-[var(--second-color)] [text-shadow:5px_-2px_0_var(--white-color)]"
        />
        <p 
          className="mx-auto mt-4 max-w-lg text-white font-normal text-lg sm:text-xl [text-shadow:0_1px_0_#000,0_0_6px_rgba(0,0,0,0.7)] animate-fade-in-up"
          style={{ animationDelay: "0.5s", animationFillMode: "backwards" }}
        >
          The perfect blend of fresh fruits and vegetables, our smoothies are
          the perfect way to start your day.
        </p>

        <div className="mx-auto my-8 grid max-w-3xl grid-cols-1 justify-items-center gap-x-10 gap-y-2 sm:grid-cols-2">
          {benefits.map((benefit, index) => (
            <BenefitItem key={benefit} text={benefit} index={index} />
          ))}
        </div>

        <div 
          className="mt-5 animate-fade-in-up"
          style={{ animationDelay: "1.5s", animationFillMode: "backwards" }}
        >
          <button className="bg-[#FFC935] px-8 py-3 pb-4 text-xl font-semibold rounded-full text-black hover:bg-white transition-all duration-300">
            Shop Juices
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;