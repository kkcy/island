/** @jsx jsx */
/** @jsxFrag React.Fragment */

import React from "react"
import { jsx, AspectImage } from "theme-ui"
import { motion } from "framer-motion"

const variants = {
  idle: {
    y: [600, 600],
    x: [-30, 30],
    transition: { yoyo: Infinity, ease: "linear", duration: 2 },
  },
  moving: { opacity: 0 },
  arrived: { opacity: 1 },
  godofwealth: {
    y: [400, 400],
    x: [-105, -110],
    transition: { yoyo: Infinity, ease: "linear", duration: 2 },
  },
}

const Picker = ({ destination, setDestination }) => {
  return (
    // <motion.div
    //   sx={{
    //     position: "absolute",
    //     display: "flex",
    //     justifyContent: "center",
    //     alignItems: "center",
    //     width: "100%",
    //     bottom: -75,
    //   }}
    //   onHoverStart={() => {
    //     setDestination("godofwealth")
    //   }}
    // >
    //   <img src="/island/jdb-3.png" />
    // </motion.div>
    <div>
      <motion.div
        sx={{
          position: "absolute",
          right: 20,
          top: 20,
          width: 130,
          padding: "2px 12px 8px 12px",
          borderRadius: 16,
        }}
        animate={{
          backgroundColor:
            destination == "godofwealth"
              ? "rgba(21,111,173,.8)"
              : "rgba(1, 85, 134, 0.5)",
          border:
            destination == "godofwealth"
              ? "3px solid #3dc8ef"
              : "3px solid rgba(1, 85, 134, 1)",
          transition: { ease: "easeOut", duration: 0.5 },
        }}
        onHoverStart={() => {
          setDestination("godofwealth")
        }}
        onClick={() => {
          setDestination("godofwealth")
        }}
      >
        <motion.i
          sx={{
            background: "url('/island/godofwealth.png')",
            backgroundPosition: "center",
            height: 62,
            display: "block",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          animate={{
            filter: destination == "godofwealth" ? "none" : "brightness(60%)",
          }}
        />
        <motion.p
          sx={{ margin: "6px 0 0 0", fontWeight: "bold" }}
          animate={{
            color: destination == "godofwealth" ? "white" : "rgb(70, 138, 197)",
          }}
        >
          JDB财神捕鱼
        </motion.p>
      </motion.div>
      <motion.div
        sx={{
          position: "absolute",
          right: 20,
          top: 140,
          width: 130,
          padding: "2px 12px 8px 12px",
          borderRadius: 16,
        }}
        animate={{
          backgroundColor:
            destination == "fishingworld"
              ? "rgba(21,111,173,.8)"
              : "rgba(1, 85, 134, 0.6)",
          border:
            destination == "fishingworld"
              ? "3px solid #3dc8ef"
              : "3px solid rgba(1, 85, 134, 1)",
        }}
        onHoverStart={() => {
          setDestination("fishingworld")
        }}
        onClick={() => {
          setDestination("fishingworld")
        }}
      >
        <motion.i
          sx={{
            background: "url('/island/fishingworld.png')",
            backgroundPosition: "center",
            height: 62,
            display: "block",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
          animate={{
            filter: destination == "fishingworld" ? "none" : "brightness(60%)",
          }}
        />
        <motion.p
          sx={{ margin: "6px 0 0 0", fontWeight: "bold" }}
          animate={{
            color:
              destination == "fishingworld" ? "white" : "rgb(70, 138, 197)",
          }}
        >
          GG新捕鱼
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Picker
