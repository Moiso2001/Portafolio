import './App.css';

import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import { useRef } from 'react';

function App() {

  const ref = useRef(null);

  const handleScroll = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
      <Navbar handle={handleScroll}/>
      <Body handle={handleScroll}/>
      <Search reference={ref}/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
