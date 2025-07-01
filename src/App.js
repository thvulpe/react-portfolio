import './App.css';
import Header from './components/Header';
import Socials from './components/Socials';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"
import Living from './components/Living';
import Education from './components/Education';

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Socials />
        <Living />
        <Education />
        <Footer />
      </div>

      <Analytics />
    </>
  );
}

export default App;
