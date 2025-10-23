import romano_image from "../assets/images/Romano-1024x1024.png";
import "../css/Hero.css";
import LiquidEther from "../assets/reactbits/LiquidEther.jsx";
import Button from "./Button.jsx";

function Hero() {
  return (
    <div className="layout main-container">
      <div className="liquid-background">
        <LiquidEther
          colors={["#5227FF", "#FF9FFC", "#B19EEF"]}
          mouseForce={20}
          cursorSize={100}
          isViscous={false}
          viscous={30}
          iterationsViscous={32}
          iterationsPoisson={32}
          resolution={0.5}
          isBounce={false}
          autoDemo={true}
          autoSpeed={0.5}
          autoIntensity={2.2}
          takeoverDuration={0.25}
          autoResumeDelay={3000}
          autoRampDuration={0.6}
        />
      </div>

      <div className="grow1 text-container">
        <h1 className="text heading">Hi, I'm Romano</h1>
        <h2 className="text occupation">Full-Stack Developer.</h2>
        <p className="text summary">
          Experienced in React, C#, HTML, CSS, and WordPress, delivering secure,
          high-performing websites with expertise in server management and
          e-commerce platforms. Currently at Hive Digital Marketing, building
          modern, scalable web solutions.
        </p>
        <Button Text={"Contact"} Link={""} />
      </div>

      <div className="grow1">
        <img className="romano-image" src={romano_image} alt="Romano" />
      </div>
    </div>
  );
}

export default Hero;
