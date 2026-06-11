import "./styles/global.css";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Services from "./components/Services.jsx";
import Experience from "./components/Experience.jsx";
import Barbers from "./components/Barbers";
import Booking from "./components/Booking.jsx";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer.jsx";



function App() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Experience />
      <Barbers />
       <Booking />
       <Reviews/>
       <Footer />
    </>
  );
}

export default App;