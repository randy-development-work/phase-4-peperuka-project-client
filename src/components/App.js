import logo from '../logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './Navbar';
import { Route, Routes, Outlet } from "react-router-dom";
import Home from './pages/Home';
import Items from './Items';
import About from './pages/About';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Footer from './Footer';
import Cart from './pages/Cart'
// import { ShopContextProvider } from '../context/shop-context';

function App() {
  const [user, setUser] = useState(null);

  // auto-login
  useEffect(() => {
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  return (
    <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories/:categoryID" element={<Items />}/>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp setUser={setUser}/>} />
          <Route path="/login" element={<LogIn setUser={setUser}/>} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        <Footer />
      
    </>
  );
}

export default App;
