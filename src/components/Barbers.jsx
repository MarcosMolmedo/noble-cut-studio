import "../styles/Barbers.css";

const barbers = [
  {
    id: 1,
    name: "Lucas",
    role: "Fade Specialist",
    image: "/images/barber-lucas.jpg",
  },
  {
    id: 2,
    name: "Amir",
    role: "Beard & Classic Cuts",
    image: "/images/barber-amir.jpg",
  },
  {
    id: 3,
    name: "Noah",
    role: "Modern Grooming",
    image: "/images/barber-noah.jpg",
  },
];

const Barbers = () => {
  return (
    <section className="barbers" id="barbers">
      <div className="barbers__container">
        <div className="barbers__header">
          <span className="barbers__label">Our Barbers</span>

          <h2 className="barbers__title">
            Precision professionals.
          </h2>

          <p className="barbers__text">
            Skilled barbers focused on detail, comfort and personal style.
          </p>
        </div>

        <div className="barbers__grid">
          {barbers.map((barber) => (
            <article className="barbers__card" key={barber.id}>
              <div className="barbers__image-wrapper">
                <img
                  src={barber.image}
                  alt={`${barber.name} barber at Noble Cut Studio`}
                  className="barbers__image"
                />
              </div>

              <div className="barbers__content">
                <h3 className="barbers__name">{barber.name}</h3>
                <p className="barbers__role">{barber.role}</p>

                <div className="barbers__icons" aria-hidden="true">
                  <span className="barbers__icon"></span>
                  <span className="barbers__icon"></span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Barbers;