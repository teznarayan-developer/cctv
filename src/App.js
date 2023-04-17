import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import NavBar from './component/NavBar';


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/header' element={<Header />}/>
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/' element={<Home />} />
      </Routes>
    {/* <Header /> */}
    </div>
  );
}

export default App;
