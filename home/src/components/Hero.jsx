import reactLogo from "../assets/Romano Self.png";

function Hero() {
  return (
    <div>
      <div>
        <h1>Hi, I'm Romano</h1>
        <h2>Full-Stack Developer.</h2>
        <p>
          My name is Romano Beer, I'm a experienced web developer with a strong
          background in C#, HTML, and CSS, and a proven track record of
          delivering high-quality web development projects. Skilled in managing
          servers for websites, ensuring their security, performance, and
          availability. Proficient in various content management systems and
          e-commerce platforms. Currently employed at OM & Barker, providing web
          development services to clients, and committed to staying up to date
          with the latest web development technologies and trends.
        </p>
        <button>Contact</button>
      </div>
      <div>
        <img
          src={reactLogo}
          alt="Romano"
        />
      </div>
    </div>
  );
}

export default Hero;
