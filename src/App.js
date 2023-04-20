import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Contact';
import Home from './component/Home';
import NavBar from './component/NavBar';
import About from './component/About';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
