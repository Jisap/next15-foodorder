"use client"

import juiceData from "@/constants/Data.json"
import { Eye, Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FruitYogurtSmoothies = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const categories = [
    "Fruit Juice",
    "Smoothies",
    "Healthy Drink",
    "Ice Cream Shakes",
    "Mocktails"
  ]

  return (
    <div className='section-fruit relative juice-wrap pb-[100px] px-[8%] lg:px-[12%] overflow-hidden'>
      <div className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <h1 className="font-bold font-fraunces text-6xl text-white mt-12">
          Fruit & Yogurt Smoothies
        </h1>

        <div className="cate-list flex flex-wrap items-center gap-4 pt-5 mt-5 mb-20">
          {categories.map((category, index) => (
            <button 
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`
                px-4 py-2 rounded-full font-semibold transition duration-200
                ${activeIndex === index 
                  ? "bg-yellow-400 text-black border-2 border-yellow-400" 
                  : "border-2 border-white text-white hover:bg-yellow-400 hover-border-transparent hover:text-black" 
                }  
              `}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 my-10">
          {juiceData.slice(activeIndex * 6, activeIndex * 6 + 6).map((item, index) => (
            <div key={item.id || index} className="juice-card group relative flex flex-col justify-center items-center text-center mb-16 cursor-pointer"> 
              <div className="juice-img relative">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  width={300} 
                  height={210} 
                  className="rounded-full"
                />

                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-yellow-100 p-3 rounded-full cursor-pointer hover:bg-yellow-300 transition">
                    <Heart className="w-6 h-6 text-gray-800 hover:text-black"/>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full cursor-pointer hover:bg-yellow-300 transition">
                    <ShoppingCart className="w-6 h-6 text-gray-800 hover:text-black"/>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-full cursor-pointer hover:bg-yellow-300 transition">
                    <Eye className="w-6 h-6 text-gray-800 hover:text-black"/>
                  </div>
                </div>

                <div className="juice-info mt-8">
                  <h1 className="font-semibold font-fraunces text-2xl text-white">
                    {item.title}
                  </h1>

                  <p className="text-white font-fraunces font-semibold text-xl">
                    {item.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 flex justify-center items-center">
          <button className="bg-[#ffc935] px-8 py-3 pb-4 text-xl rounded-full hover:bg-white transition-all duration-300">
            View More Juices
          </button>
        </div>
      </div>
    </div>
  )
}

export default FruitYogurtSmoothies