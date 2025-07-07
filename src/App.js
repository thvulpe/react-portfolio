import './App.css';
import Header from './components/Header/Header';
import Socials from './components/Socials/Socials';
import Footer from './components/Footer/Footer';
import { Analytics } from "@vercel/analytics/react"
import Living from './components/Living/Living';
import Education from './components/Education/Education';
import CarouselGallery from './components/CarouselGallery/CarouselGallery';
import WavyTitle from './components/WavyTitle/WavyTitle';
import Robotics from './components/Robotics/Robotics';
import Technologies from './components/Technologies/Technologies';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Socials />
        <Living />
        <Education />
        <WavyTitle text="Activities" />
        <Robotics />
        <WavyTitle text="Gallery" />
        <CarouselGallery />
        <WavyTitle text="Projects" />
        <Projects />
        <Technologies />
        <Footer />
      </div>

      <Analytics />
    </>
  );
}

export default App;
