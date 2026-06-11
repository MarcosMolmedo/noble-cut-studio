import "../styles/Experience.css";

const Experience = () => {
  return (
    <section className="experience" id="experience">
      <div className="experience__container">
        <div className="experience__content">
          <span className="experience__label">Experience</span>

          <h2 className="experience__title">
            More than a haircut.
            <span>A moment for yourself.</span>
          </h2>

          <p className="experience__text">
            We believe grooming is not just about looking good. It is about
            slowing down, feeling confident and enjoying every detail.
          </p>

          <ul className="experience__list">
            <li className="experience__item">Relaxed atmosphere</li>
            <li className="experience__item">Premium products</li>
            <li className="experience__item">Personal attention</li>
            <li className="experience__item">Coffee & good vibes</li>
          </ul>
        </div>

        <div className="experience__gallery" aria-label="Barber studio experience">
          <img
            src="/images/experience-chair.jpg"
            alt="Premium barber chair in a dark studio"
            className="experience__image experience__image--large"
          />

          <div className="experience__side-images">
            <img
              src="/images/experience-coffee.jpg"
              alt="Coffee served during the barber experience"
              className="experience__image"
            />

            <img
              src="/images/experience-products.jpg"
              alt="Premium grooming products"
              className="experience__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;