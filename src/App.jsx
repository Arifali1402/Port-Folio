import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Featured from "./Components/Featured";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from 'locomotive-scroll';
import SkillsCarousel from "./Components/SkillsCarousel";

function App() {
  const scroll = new LocomotiveScroll()
  return (
    <div id="home" className="w-full min-h-screen text-white bg-zinc-900">
      <Navbar />
      <LandingPage />
      <Marquee />
      <SkillsCarousel />
      <About />
      <Eyes />
      <Featured />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
