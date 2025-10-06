"use client"

import Image from "next/image"
import { useState } from "react"
import HeroComponent from "./HeroComponent"
import FavoriteFlavors from "./FavoriteFlavors"
import FruitYogurtSmoothies from "./FruitYogurtSmoothies"
import BannerComponent from "./BannerComponent"
import FlavorRichMenus from "./FlavorRichMenus"
import BlogComponent from "./BlogComponent"
import TestimonialsComponent from "./TestimonialsComponent"



Image


const Index = () => {
  return (
    <>
      <HeroComponent />
      <FavoriteFlavors />
      <FruitYogurtSmoothies />
      <BannerComponent />
      <FlavorRichMenus />
      <BlogComponent />
      <TestimonialsComponent />
    </>
  )
}

export default Index