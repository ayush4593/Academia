import React from "react"
import AboutCard from "../about/AboutCard"
import Hero from "./hero/Hero"
import HAbout from "./HAbout"
import Test from "./testiomonal/Test"
import Hblog from "./Hblog"
import Hprice from "./Hpricie"
const home = () => {
  return (
    <>
      <Hero />
      <AboutCard />
      <HAbout />
      <Test />
      <Hblog />
      <Hprice />
    </>
  )
}

export default home
