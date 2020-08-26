/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react"
import { jsx, AspectImage } from "theme-ui"
import { motion } from "framer-motion"

const variants = {
  idle: {
    rotate: [-60, 60, 30, -30],
    transition: { yoyo: Infinity, ease: "linear", duration: 2 },
  },
}

const Compass = ({ setDestination }) => {
  return (
    <>
      <motion.div
        sx={{
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          bottom: -75,
        }}
        onHoverStart={() => {
          setDestination("idle")
        }}
        onClick={() => {
          setDestination("idle")
        }}
      >
        <motion.img
          src="/island/compass.png"
          sx={{
            width: 150,
          }}
        />
        <motion.img
          variants={variants}
          animate="idle"
          src="/island/compass_2.png"
          sx={{ position: "absolute", width: 45 }}
        />
      </motion.div>
    </>
  )
}

export default Compass
