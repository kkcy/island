/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react"
import { jsx, AspectImage } from "theme-ui"
import { motion } from "framer-motion"

const variants = {
  idle: {
    opacity: 0,
    transition: { ease: "linear", duration: 0.5 },
  },
  godofwealth: {
    opacity: [1, 1],
    y: [100, 150],
    x: [500, 500],
    transition: { yoyo: Infinity, ease: "easeOut", duration: 0.5 },
  },
  fishingworld: {
    opacity: [1, 1],
    y: [100, 150],
    x: [500, 500],
    transition: { yoyo: Infinity, ease: "easeOut", duration: 0.5 },
  },
}

const Location = ({ destination }) => {
  return (
    <motion.div
      sx={{
        width: 220,
        height: 235,
        cursor: "pointer",
        position: "absolute",
        top: 0,
        left: 0,
        background: "url('/island/bubble.png') 50% no-repeat",
        fontSize: 26,
        fontWeight: "bold",
      }}
      // onHoverStart={() => {
      //   setDestination("godofwealth")
      // }}
      variants={variants}
      initial={"idle"}
      animate={destination ?? "idle"}
    >
      <i
        sx={{
          background: `url('/island/${destination}.png')`,
          width: 220,
          height: 150,
          display: "block",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
      <p sx={{ margin: "0", color: "#ff0", textAlign: "center" }}>
        前往捕鱼
      </p>
    </motion.div>
  )
}

export default Location
