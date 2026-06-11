import "../styles/Booking.css";

const Booking = () => {
  return (
    <section className="booking" id="booking">
      <div className="booking__container">
        <div className="booking__content">
          <span className="booking__label">Book your appointment</span>

          <h2 className="booking__title">Book your appointment online</h2>

          <p className="booking__text">
            Choose your service, select your barber and reserve your time in just
            a few clicks.
          </p>

          <a href="#" className="booking__button">
            Book now
          </a>

          <div className="booking__features">
            <span className="booking__feature">Fresh cuts</span>
            <span className="booking__feature">Good coffee</span>
            <span className="booking__feature">Relaxed atmosphere</span>
          </div>
        </div>

        <div className="booking__image-wrapper">
          <img
            src="/images/booking-phone.jpg"
            alt="Online barber appointment booking"
            className="booking__image"
          />
        </div>
      </div>
    </section>
  );
};

export default Booking;