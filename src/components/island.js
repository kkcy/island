/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React, { useState } from "react"
import { jsx, Box, AspectImage, AspectRatio } from "theme-ui"
import { motion } from "framer-motion"
import Picker from "./picker"
import Ship from "./ship"
import Compass from "./compass"

const variants = {
  idle: {
    scale: 1,
    originX: 0,
    originY: 1,
    transition: { ease: "linear", duration: 1 },
  },
  godofwealth: {
    scale: 2,
    originX: 0.02,
    originY: 1,
    transition: { ease: "linear", duration: 1 },
  },
  fishingworld: {
    scale: 2,
    originX: 0.6,
    originY: 0.1,
    transition: { ease: "linear", duration: 1 },
  },
}

const Island = ({ destination }) => {
  return (
    <motion.img
      variants={variants}
      initial="idle"
      animate={destination ?? "idle"}
      src="/island/background.jpg"
      sx={{ height: 800 }}
    />
  )
}

export default Island
