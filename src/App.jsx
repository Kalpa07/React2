
import './App.css';
import {BrowserRouter, Routes , Route} from "react-router-dom"

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Flavors from './pages/Flavors';
import Nopage from './pages/Nopage';
import Navbar from './components/Navbar';
import Background from './components/Background';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Background/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/About" element={<About />}/>
        <Route path="/Contact" element={<Contact />}/>
        <Route path="/Flavors" element={<Flavors />}/>
        <Route path="/*" element={<Nopage />}/>
      </Routes>
    </BrowserRouter>



  );
}

export default App;
