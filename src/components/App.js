import logo from '../logo.svg';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element />

      </Routes>
    </div>
  );
}

export default App;
