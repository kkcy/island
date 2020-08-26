import React, { useState } from "react"
import { Box, AspectImage, AspectRatio } from "theme-ui"
import { motion } from "framer-motion"
import Island from "./island"
import Picker from "./picker"
import Ship from "./ship"
import Compass from "./compass"
import Location from "./location"

const Wrapper = () => {
  const [destination, setDestination] = useState("idle")

  return (
    <Box
      sx={{
        width: 800 * 1.54,
        height: 800,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Island destination={destination} />
      <Ship destination={destination} />
      <Compass setDestination={setDestination} />
      {/* </Box> */}
      <Picker destination={destination} setDestination={setDestination} />
      <Location destination={destination} />
    </Box>
  )
}

export default Wrapper
