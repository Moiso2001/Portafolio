import './App.css';

import Body from './components/Body/Body';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Search/Search';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Body/>
      <Search/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
