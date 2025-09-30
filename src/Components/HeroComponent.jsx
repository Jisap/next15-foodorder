import React from "react";
import Image from "next/image";
import { elm1, elm2, elm3, elm4, elm5, elm6, elm7, elm8, listItem } from "@/assets/images.js";

const HeroComponent = () => {
  return (
    <div className="header flex items-center justify-center text-center z-1 overflow-x-hidden">
     
      <Image src={elm1} alt="Elm1" width={150} height={150} className="elm elm1"/>
      <Image src={elm2} alt="Elm2" width={150} height={150} className="elm elm2"/>
      <Image src={elm4} alt="Elm4" width={150} height={150} className="elm elm4"/>
      <Image src={elm4} alt="Elm4" width={150} height={150} className="elm elm5"/>
      <Image src={elm5} alt="Elm5" width={150} height={150} className="elm elm6"/>
      <Image src={elm6} alt="Elm6" width={150} height={150} className="elm elm7"/>
      <Image src={elm8} alt="Elm8" width={150} height={150} className="elm elm8"/>
      <Image src={elm7} alt="Elm7" width={150} height={150} className="elm elm9"/>
      <Image src={elm1} alt="Elm1" width={150} height={150} className="elm elm10"/>

      <div className="hero-content z-10">
        <h1 className="hero-title font-bold font-fraunces">Delicious</h1>
        <h1 className="hero-title hero-title2 font-bold font-fraunces">Smoothies</h1>
        <p className="text-white font-normal">
          The perfect blend of fresh fruits and vegetables, our smoothies are
          the perfect way to start your day.
        </p>

        <div className="flex hero-info justify-center items-center gap-5">
          <div className="flex flex-col gap-2 my-8">
            <div className="flex flex-col gap-8 my-8">
              <p className="flex gap-2 text-xl text-white">
                <Image 
                  src={listItem}
                  alt="List item"
                  width={20}
                  height={20}
                />
                Enhance Immunity
              </p>
              <p className="flex gap-2 text-xl text-white">
                <Image 
                  src={listItem}
                  alt="List item"
                  width={20}
                  height={20}
                />
                Reduce Inflammation
              </p>
              <p className="flex gap-2 text-xl text-white">
                <Image
                  src={listItem}
                  alt="List item"
                  width={20}
                  height={20}
                />
                Reduces the risks of diabetes
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-2 my-8">
            <div className="flex flex-col gap-8 my-8">
              <p className="flex gap-2 text-xl text-white">
                <Image
                  src={listItem}
                  alt="List item"
                  width={20}
                  height={20}
                />
                Reduces Sugar Risks
              </p>
              <p className="flex gap-2 text-xl text-white">
                <Image
                  src={listItem}
                  alt="List item"
                  width={20}
                  height={20}
                />
                Enhance Your Eyesight
              </p>
              <p className="flex gap-2 text-xl text-white">
                <Image
                  src={listItem}
                  alt="List item"
                  width={20}
                  height={20}
                />
                Reduces Sugar Risks
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 flex justify-center items-center">
          <button className="bg-[#ffc935] px-8 py-3 pb-4 text-xl rounded-full hover:bg-white transition-all duration-300">
            Shop Juices
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroComponent;