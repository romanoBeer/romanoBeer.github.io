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
        <h1 className="text">Hi, I'm Romano</h1>
        <h2 className="text">Full-Stack Developer.</h2>
        <p className="text">
          My name is Romano Beer, I'm a experienced web developer with a strong
          background in C#, HTML, and CSS, and a proven track record of
          delivering high-quality web development projects. Skilled in managing
          servers for websites, ensuring their security, performance, and
          availability. Proficient in various content management systems and
          e-commerce platforms. Currently employed at OM & Barker, providing web
          development services to clients, and committed to staying up to date
          with the latest web development technologies and trends.
        </p>
        <Button Text={"Contact"} Link={""}/>
      </div>

      <div className="grow1">
        <img className="romano-image" src={romano_image} alt="Romano" />
      </div>
    </div>
  );
}

export default Hero;
