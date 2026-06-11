import "../styles/Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__content">
          <span className="hero__tag">PREMIUM BARBER STUDIO</span>

          <h1 className="hero__title">
            Barber Experience
            <br />
            In Utrecht
          </h1>

          <p className="hero__description">
            Sharp cuts, clean fades and refined grooming in a calm, modern
            studio.
          </p>

          <div className="hero__buttons">
            <a href="#booking" className="hero__button hero__button--primary">
              Book Appointment
            </a>

            <a href="#services" className="hero__button hero__button--secondary">
              View Services
            </a>
          </div>
        </div>

        <div className="hero__image-wrapper">
        
        <img src="/images/hero-barber.jpg"
        alt="Premium barber cutting hair"
        className="hero__image"
         />
         
        </div>
      </div>
    </section>
  );
};

export default Hero;