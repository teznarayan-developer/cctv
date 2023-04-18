import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './component/Header';
import Home from './component/Home';
import NavBar from './component/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  );
}

export default App;
