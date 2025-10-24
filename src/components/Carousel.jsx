import React from "react";
import Marquee from "react-fast-marquee";
import "../css/Carousel.css";
import { Assets } from "./Assets";

const items = [
  { name: "HTML", img: Assets.Html },
  { name: "PHP", img: Assets.PHP },
  { name: "C#", img: Assets.CSharp },
  { name: "CSS", img: Assets.CSS },
  { name: "React.js", img: Assets.ReactLogo },
  // { name: "JavaScript", img: Assets. },
  { name: "WordPress", img: Assets.WordPress },
  { name: "MySQL", img: Assets.MySQL },
  { name: "Three.js", img: Assets.ThreeJS },
  { name: "Docker", img: Assets.Docker },
  // { name: "Firebase", img: Assets. },
  { name: "Tailwind CSS", img: Assets.Tailwind },
  { name: "Woocommerce", img: Assets.Woocommerce },
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
