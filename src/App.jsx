import { useState } from "react";
import Hero from "./components/Hero";
import "@fontsource/montserrat";
import "./css/main.css";
import Menu from "./components/Menu";
import HeadWithSub from "./components/HeadWithSub";
import Carousel from "./components/Carousel";
import Grid from "./components/Grid";
import Projects from "./components/Projects";
import ProjectCard from "./components/ProjectCard";

function App() {
  return (
    <>
      <Hero />
      <Menu />
      <HeadWithSub
        Head={"About"}
        Sub={
          "I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in London, UK, but I’m happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run or cycling. I’d love you to check out my work."
        }
      />
      <Carousel />
      <HeadWithSub Head={"My Projects"} />
      <Grid
        items={Projects}
        renderItem={(project) => <ProjectCard project={project} />}
      />
    </>
  );
}

export default App;
