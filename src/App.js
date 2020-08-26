import React from "react"
import { ThemeProvider } from "theme-ui"

import "./App.css"
import theme from "./theme"
import Wrapper from "./components/wrapper"

export default (props) => (
  <ThemeProvider theme={theme}>
    <div className="App">
      <Wrapper />
    </div>
  </ThemeProvider>
)
