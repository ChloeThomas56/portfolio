// Import npm
import HorizontalScroll from 'react-scroll-horizontal';

// Import components
import Home from '../Home/Home';
import About from '../About/About';
import Header from '../Header/Header';

// Import css
import './App.scss';

function App() {
  return (
    <div className='app'>
      <Header />
      <HorizontalScroll
        pageLock={true}
        reverseScroll={true}
        style={{ width: `100vw`, height: `100vh` }}
      >

        <Home />
        <About />
        
      </HorizontalScroll>
    </div>
  );
}

export default App;
