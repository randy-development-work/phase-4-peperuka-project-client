import logo from '../logo.svg';
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
  return (
    <>
      {/* <ShopContextProvider> */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="categories/:categoryID" element={<Items />}/>
          <Route path="/about" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/cart" element={<Cart />} />
          
        </Routes>
        <Footer />
      {/* </ShopContextProvider> */}
    </>
  );
}

export default App;
