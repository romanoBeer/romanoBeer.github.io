import React from "react";
import Marquee from "react-fast-marquee";
import "../css/Carousel.css";

const items = [
  { name: "HTML", img: "https://via.placeholder.com/40" },
  { name: "PHP", img: "https://via.placeholder.com/40" },
  { name: "C#", img: "https://via.placeholder.com/40" },
  { name: "CSS", img: "https://via.placeholder.com/40" },
  { name: "React.js", img: "https://via.placeholder.com/40" },
  { name: "JavaScript", img: "https://via.placeholder.com/40" },
  { name: "WordPress", img: "https://via.placeholder.com/40" },
  { name: "MySQL", img: "https://via.placeholder.com/40" },
  { name: "Three.js", img: "https://via.placeholder.com/40" },
  { name: "Docker", img: "https://via.placeholder.com/40" },
  { name: "Firebase", img: "https://via.placeholder.com/40" },
  { name: "Tailwind CSS", img: "https://via.placeholder.com/40" },
  { name: "Woocommerce", img: "https://via.placeholder.com/40" },
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
