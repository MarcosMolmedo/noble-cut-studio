import "../styles/Services.css";

const services = [
  {
    image: "/images/service-haircut.jpg",
    title: "Haircut",
    text: "Classic or modern cut",
    time: "30 min",
    price: "€28",
  },
  {
    image: "/images/service-skin-fade.jpg",
    title: "Skin Fade",
    text: "Clean fade with sharp finish",
    time: "45 min",
    price: "€35",
  },
  {
    image: "/images/service-beard.jpg",
    title: "Beard Trim",
    text: "Shape, trim and grooming",
    time: "20 min",
    price: "€22",
  },
  {
    image: "/images/service-haircut-beard.jpg",
    title: "Haircut + Beard",
    text: "Complete grooming service",
    time: "60 min",
    price: "€49",
  },
  {
    image: "/images/service-premium.jpg",
    title: "Premium Grooming",
    text: "Cut, beard and styling",
    time: "75 min",
    price: "€65",
  },
  {
    image: "/images/service-kids.jpg",
    title: "Kids Cut",
    text: "Clean and simple haircut",
    time: "25 min",
    price: "€20",
  },
];

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container">
        <div className="services__header">
          <span className="services__label">Our Services</span>
          <h2 className="services__title">Precision, style and attention to detail.</h2>
          <p className="services__description">
            Premium barber services designed for a clean, confident look.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service) => (
            <article className="services__card" key={service.title}>
              <div className="services__image-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="services__image"
                />
              </div>

              <div className="services__content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-text">{service.text}</p>

                <div className="services__meta">
                  <span>{service.time}</span>
                  <span>{service.price}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;