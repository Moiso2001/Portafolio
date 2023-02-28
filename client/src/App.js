import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Body from './components/Body/Body';

import { useRef } from 'react';

import './App.css';

function App() {

  const ref = useRef(null);
  const refContact = useRef(null);

  const handleScroll = () => {
      ref.current?.scrollIntoView({behavior: 'smooth'});
  }

  const handleContactScroll = () => {
    refContact.current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className="App">
      <Navbar handle={handleScroll} secondHandle={handleContactScroll}/>
      <Body handle={handleScroll}/>
      <Search reference={ref}/>
      <Contact reference={refContact}/>
      <Footer/>
    </div>
  );
}

export default App;
