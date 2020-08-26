import React from "react"
import { AspectImage } from "theme-ui"
import { motion } from "framer-motion"

const variants = {
  idle: {
    y: [600, 600],
    x: [-30, 30],
    transition: { yoyo: Infinity, ease: "linear", duration: 2 },
  },
  moving: {
    opacity: [0, 1],
    transition: { ease: "easeInOut", duration: 2 },
  },
  fishingworldMoving: {
    y: 370,
    x: -80,
    transition: { ease: "easeOut", duration: 1 },
  },
  godofwealthMoving: {
    y: 370,
    x: 30,
    transition: { ease: "easeOut", duration: 1 },
  },
//   godofwealthIdle: {
//     opacity: 1,
//     y: [370, 370],
//     x: [-105, -110],
//     transition: { yoyo: Infinity, ease: "linear", duration: 1 },
//   },
}

const Ship = ({ destination }) => {
  return (
    <motion.img
      variants={variants}
      animate={
        destination != "idle"
          ? ["moving", `${destination}Moving`] //, `${destination}Idle`]
          : ["moving", "idle"]
      }
      src="/island/ship.png"
      style={{ position: "absolute", top: 0, width: 60 }}
    />
  )
}

export default Ship
