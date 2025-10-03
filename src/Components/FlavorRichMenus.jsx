"use client"

import { curvCandyImg, curvCandyImg2, FlavorMenu1, FlavorMenu10, FlavorMenu2, FlavorMenu3, FlavorMenu4, FlavorMenu5, FlavorMenu6, FlavorMenu7, FlavorMenu8, FlavorMenu9, sectionElm3, sectionElm4 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'
import { motion } from "framer-motion";

const menuData = [
  { img: FlavorMenu1, title: "Strawberry Lemonade", price: "$10.00", desc: "Awesome strawberry lemonade with a hint of mint and lime. This refreshing drink is perfect for a hot summer day." },
  { img: FlavorMenu2, title: "Watermelon Mocktail", price: "$11.11", desc: "This refreshing drink is perfect for a hot summer day and is made with fresh watermelon and a hint of mint and lime." },
  { img: FlavorMenu3, title: "Watermelon Smoothies", price: "$11.11", desc: "When you're in the mood for something sweet and refreshing, this watermelon smoothie is the perfect choice." },
  { img: FlavorMenu4, title: "Boba Juice", price: "$18.50", desc: "The perfect blend of sweet and tangy, this juice is made with fresh blackberries and a hint of chocolate and lime." },
  { img: FlavorMenu5, title: "Mango Juice", price: "$13.35", desc: "Mango juice is a refreshing and delicious drink that is perfect for a hot summer day. It is made with fresh mango and a hint of lime and mint." },
  { img: FlavorMenu6, title: "Pineapple Smoothies", price: "$10.35", desc: "Refresh yourself with this pineapple smoothie, made with fresh strawberries, blueberries, and a hint of mint and lime." },
  { img: FlavorMenu7, title: "Lemon Juice", price: "$16.00", desc: "The Lemon Juice is an absolute must-have for any summer. Made with fresh lemons and a super refreshing citrus flavor." },
  { img: FlavorMenu8, title: "Watermelon Juice", price: "$15.50", desc: "Watermelon juice with a hint of canela and lime is the perfect blend of sweet and tangy." },
  { img: FlavorMenu9, title: "Coconut Milkshake", price: "$16.20", desc: "Tropical coconut milkshake with the perfect balance of sweet and tangy, this drink is made with fresh coconut milk and a hint of chocolate and lime." },
  { img: FlavorMenu10, title: "Cucumber Juice", price: "$16.20", desc: "Vegan cucumber juice is the best choice to start your day." },
];

const MenuCard = ({ item }) => (
  <div className="flex items-center gap-4 md:gap-6">
    <Image 
      src={item.img} 
      alt={item.title} 
      width={120} 
      height={120} 
      className="rounded-full object-cover w-[80px] h-[80px] md:w-[120px] md:h-[120px] border-4 border-white flex-shrink-0"
    />
    <div className="flex-1">
      <div className="flex justify-between items-center border-b-2 border-dashed border-white pb-2">
        <h2 className="text-white font-bold text-lg md:text-2xl font-fraunces">{item.title}</h2>
        <h2 className="text-white font-bold text-lg md:text-2xl font-fraunces">{item.price}</h2>
      </div>
      <p className="text-white text-sm md:text-base pt-2">
        {item.desc}
      </p>
    </div>
  </div>
);

const FlavorRichMenus = () => {

  const titleText = "Flavor Rich Menus";
  const titleWords = titleText.split(" ");

  const titleContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleWord = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120,
      },
    },
  };

  return (
    <div className='section-flavor-menus relative pb-[100px] px-[5%] bg-amber-300'>
      <motion.div
        className='section-elm section-elm3'
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Image
          src={sectionElm3} 
          alt="section-elm3" 
          width={150} 
          height={150} 
          className='w-full h-auto'
        />
      </motion.div>
      <motion.div
        className='section-elm section-elm4'
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        <Image
          src={sectionElm4} 
          alt="section-elm4" 
          width={150} 
          height={150} 
          className='w-full h-auto'
        />
      </motion.div>

      <div className="title flex flex-col justify-center items-center text-center pt-[5%]">
        <motion.h1
          variants={titleContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="font-bold font-fraunces text-6xl text-white mt-12 [text-shadow:5px_-2px_0_var(--fourth-color)]"
        >
          {titleWords.map((word, index) => (
            <motion.span 
              key={index} 
              variants={titleWord} 
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div 
          className='grid grid-cols-1 lg:grid-cols-2 mt-[8%] gap-y-10 gap-x-20'
          variants={titleContainer} // Reutilizamos las variantes del título para el efecto stagger
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          {menuData.map((item, index) => (
            <motion.div key={index} variants={titleWord}>
              <MenuCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default FlavorRichMenus