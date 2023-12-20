
import './App.css';
import { useState, useEffect } from 'react';
import Artibutos from './components/Artibutos';
import Elegirnos from './components/Elegirnos';
import Footer from './components/Footer';
import Header from './components/Header';
import Jackpot from './components/Jackpot';
import MasRazones from './components/MasRazones';
import Nuestra from './components/Nuestra';
import BackToTop from "./assets/images/png/BackToTop.png";
import Loader from './components/Loader';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  // -----------------------Aos-------------------------
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 1200,
      }
    );
    Aos.refresh()
  });
  // ----------------backToTop----------------
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // -------------preloader--------------
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {screenLoading ? (
        <Loader />
      ) : (
        <>
          <div className=' overflow-hidden'>
            <Header />
            <Nuestra />
            <Artibutos />
            <Jackpot />
            <Elegirnos />
            <MasRazones />
            <Footer />
          </div>
          <div onClick={() => top()} className={backToTop ? "back_to_top" : "d-none"}>
            <img src={BackToTop} alt='BackToTop' />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
