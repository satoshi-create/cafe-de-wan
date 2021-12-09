import React from 'react'
import { ThemeProvider } from "styled-components"
import MyComponent from "./Test"

const Main = () => {
  return (
    <ThemeProvider theme={{ color: "red" }}>
    <MyComponent />
  </ThemeProvider>
  )
}

export default Main
