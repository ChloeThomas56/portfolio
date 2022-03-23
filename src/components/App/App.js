// Import npm
import HorizontalScroll from 'react-scroll-horizontal';
import { useRef } from 'react';

// Import components
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';

// Import css
import './App.scss';
import Footer from '../Footer/Footer';
import Skills from '../Skills/Skills';

function App() {
  const homeRef = useRef();
  const handleHomeClick = () => {
    homeRef.current.scrollIntoView({behavior: 'smooth', inline: 'center'});

  }

  const aboutRef = useRef();
  const handleAboutClick = () => {
    aboutRef.current.scrollIntoView({behavior: 'smooth', inline: 'center'});
  }

  return (
    <div className='app'>
      <Header 
        aboutClick={handleAboutClick}
        homeClick={handleHomeClick}
      />
      <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
        style={{ width: `100vw`, height: `100vh` }}
      >

        <Home componentRef={homeRef} />
        <About componentRef={aboutRef} />
        <Skills />
        
      </HorizontalScroll>
      <Footer />
    </div>
  );
}

export default App;
