"use client"

import Image from "next/image"
import { useState } from "react"
import HeroComponent from "./HeroComponent"
import FavoriteFlavors from "./FavoriteFlavors"
import FruitYogurtSmoothies from "./FruitYogurtSmoothies"
import BannerComponent from "./BannerComponent"
import FlavorRichMenus from "./FlavorRichMenus"



Image


const Index = () => {
  return (
    <>
      <HeroComponent />
      <FavoriteFlavors />
      <FruitYogurtSmoothies />
      <BannerComponent />
      <FlavorRichMenus />
    </>
  )
}

export default Index