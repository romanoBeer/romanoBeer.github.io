import { useState } from "react";
import Hero from "./components/Hero";
import "@fontsource/montserrat";
import "./css/main.css";
import Menu from "./components/Menu";
import About from "./components/About";

function App() {
  return (
    <>
      <Hero />
      <Menu />
      <About />
    </>
  );
}

export default App;
