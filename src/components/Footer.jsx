import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__brand">
            <h2 className="footer__logo">
              NOBLE CUT
              <span>STUDIO</span>
            </h2>

            <p className="footer__description">
              Premium barber experience in Utrecht. Craftsmanship, precision
              and timeless style.
            </p>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            <h3 className="footer__title">Navigation</h3>

            <ul className="footer__menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#experience">Experience</a></li>
              <li><a href="#barbers">Barbers</a></li>
              <li><a href="#reviews">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>

          <div className="footer__contact">
            <h3 className="footer__title">Contact</h3>

            <ul className="footer__list">
              <li>Utrecht, Netherlands</li>
              <li>
                <a href="tel:+31612345678">+31 6 1234 5678</a>
              </li>
              <li>
                <a href="mailto:hello@noblecutstudio.nl">
                  hello@noblecutstudio.nl
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__hours">
            <h3 className="footer__title">Opening Hours</h3>

            <ul className="footer__list">
              <li>
                <span>Monday - Friday</span>
                <strong>09:00 - 20:00</strong>
              </li>
              <li>
                <span>Saturday</span>
                <strong>09:00 - 18:00</strong>
              </li>
              <li>
                <span>Sunday</span>
                <strong>Closed</strong>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2026 Noble Cut Studio. All rights reserved.
          </p>

          <div className="footer__credits">
            <span>Developed by </span>

            <a
              href="https://www.linkedin.com/in/marcos-manuel-olmedo/?locale=es"
              target="_blank"
              rel="noopener noreferrer"
            >
              Marcos M Olmedo
            </a>
          </div>

          <div className="footer__socials">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;