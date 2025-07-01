import './App.css';
import Header from './components/Header';
import Socials from './components/Socials';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <Socials />
      </div>

      <Analytics />
    </>
  );
}

export default App;
