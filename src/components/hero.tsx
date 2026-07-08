import heroImg from "../assets/hero.jpg";

function Hero() {
  return (
<section className="hero-wrapper">
  <div className="hero">
     <div className="hero-left">
        <span className="hero-badge">
          ✨ Freshers Guide
        </span>

        <h1>
          New to MIT Bengaluru?
          <br />
          We've got you covered!
        </h1>

        <p>
          Welcome to the family! Your journey at MIT Bengaluru starts
          here. We've assembled all the essential guides and resources
          to help you settle in, find your way, and make the most of
          campus life.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            Get Started Guide
          </button>

          <button className="secondary-btn">
            Virtual Tour
          </button>
        </div>
      </div>


      <div className="hero-right">
        <img src={heroImg} alt="MIT Bengaluru Campus" />
      </div>
      
      </div>
    </section>
  );
}

export default Hero;