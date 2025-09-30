"use client"

import Image from "next/image"
import { useState } from "react"
import HeroComponent from "./HeroComponent"
import FavoriteFlavors from "./FavoriteFlavors"



Image


const Index = () => {
  return (
    <>
      <HeroComponent />
      <FavoriteFlavors />
    </>
  )
}

export default Index