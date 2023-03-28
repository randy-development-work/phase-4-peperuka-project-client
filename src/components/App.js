import logo from '../logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        
      </Routes>
    </>
  );
}

export default App;
