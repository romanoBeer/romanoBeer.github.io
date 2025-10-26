import React from "react";
import Marquee from "react-fast-marquee";
import "../css/Carousel.css";
import { Skills } from "./Assets";

const items = [
  { name: "HTML", img: Skills.Html },
  { name: "PHP", img: Skills.PHP },
  { name: "C#", img: Skills.CSharp },
  { name: "CSS", img: Skills.CSS },
  { name: "React.js", img: Skills.ReactLogo },
  { name: "JavaScript", img: Skills.JS },
  { name: "WordPress", img: Skills.WordPress },
  { name: "MySQL", img: Skills.MySQL },
  { name: "Three.js", img: Skills.ThreeJS },
  { name: "Docker", img: Skills.Docker },
  { name: "Firebase", img: Skills.Firebase },
  { name: "Tailwind CSS", img: Skills.Tailwind },
  { name: "Woocommerce", img: Skills.Woocommerce },
];

function Carousel() {
  return (
    <div className="carousel-container">
      <Marquee speed={50} gradient={true} gradientColor="rgb(2, 0, 36)" autoFill={true}>
        {items.map((item, i) => (
          <div className="pill" key={i}>
            <img src={item.img} alt={item.name} />
            <span>{item.name}</span>
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default Carousel;
