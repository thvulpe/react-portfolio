import './App.css';
import Header from './components/Header';
import Socials from './components/Socials';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import Living from './components/Living';
import Education from './components/Education';
import CarouselGallery from './components/CarouselGallery';
import WavyTitle from './components/WavyTitle';
import Robotics from './components/Robotics';
import Technologies from './components/Technologies';

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
        <WavyTitle text="Technologies " />
        <Technologies />
        <Footer />
      </div>

      <Analytics />
    </>
  );
}

export default App;
