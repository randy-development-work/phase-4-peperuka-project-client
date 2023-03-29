import React, { Fragment, useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import { Button } from "./Button";
import "./Navbar.css";
import { ShoppingCart } from "phosphor-react";
import { HeartFilled } from '@ant-design/icons';

function Navbar({ user, setUser }) {
  const [click, setClick] = useState(false); //state for menu responsiveness
  const [btn, setBtn] = useState(true); //state for button styling

  const handleClick = () => setClick(!click);
  const closeResMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setBtn(false);
    } else {
      setBtn(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const [isBHover, setIsBHover] = useState(false);

  const handleEnter = () => {
    setIsBHover(true);
  };

  const handleLeave = () => {
    setIsBHover(false);
  };

  window.addEventListener("resize", showButton);

  //   logging user out
  function handleLogOut() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  const btnStyle = {
    backgroundColor: isHover ? "#FFF" : "transparent",
    color: isHover ? "#242424" : "#FFF",
    padding: "8px 20px",
    border: "1px solid var(--primary)",
    transition: "all 0.35s ease-out",
    cursor: "pointer",
    fontFamily: "'Eczar', serif",
    padding: "8px 20px",
    borderRadius: "2px",
    // outline: "none",
    // border: "none",
    padding: "8px 20px",
    fontSize: "20px",
    borderRadius: "5px",
  };
  const btn2Style = {
    backgroundColor: isBHover ? "#FFF" : "transparent",
    color: isBHover ? "#242424" : "#FFF",
    padding: "8px 20px",
    border: "1px solid var(--primary)",
    transition: "all 0.35s ease-out",
    cursor: "pointer",
    fontFamily: "'Eczar', serif",
    // outline: "none",
    // border: "none",
    fontSize: "20px",
    borderRadius: "5px",
  };
  if (!user) {
    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeResMenu}>
              PEPERUKA <i className="fa-solid fa-truck-ramp-box fa-bounce" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeResMenu}>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                        <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                            Coming Soon
                        </Link>
                    </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeResMenu}>
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/signup"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/login"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  Log In
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  <ShoppingCart size={32} color="#fff" />
                </Link>
              </li>
            </ul>
            <Link to="/signup" style={{ marginRight: "8px" }}>
              {btn && (
                <button
                  style={btnStyle}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  Sign Up
                </button>
              )}
            </Link>

            <Link to="/login" style={{ marginRight: "8px" }}>
              {btn && (
                <button
                  style={btn2Style}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                >
                  Log in
                </button>
              )}
            </Link>

            <Link to="/cart">
              <ShoppingCart size={32} color="#fff" />
            </Link>
          </div>
        </nav>
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeResMenu}>
              PEPERUKA <i className="fa-solid fa-truck-ramp-box fa-bounce" />
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"} />
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeResMenu}>
                  Home
                </Link>
              </li>
              {/* <li className='nav-item'>
                                            <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                                                Coming Soon
                                            </Link>
                                        </li> */}
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeResMenu}>
                  About Us
                </Link>
              </li>

              <li className="nav-item">
                <h2 style={{color:"blue", borderRadius:"blue"}}>
                  Hi, {user.username} <HeartFilled />
                </h2>
              </li>
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-links-res"
                  onClick={() => {
                    closeResMenu();
                    handleLogOut();
                  }}
                >
                  Log Out
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/cart"
                  className="nav-links-res"
                  onClick={closeResMenu}
                >
                  <ShoppingCart size={32} color="#fff" />
                </Link>
              </li>
            </ul>

            <Link to="/" style={{ marginRight: "8px" }}>
              {btn && (
                <button
                  style={btn2Style}
                  onMouseEnter={handleEnter}
                  onMouseLeave={handleLeave}
                  onClick={() => {
                    handleLogOut();
                  }}
                >
                  Log Out
                </button>
              )}
            </Link>

            <Link to="/cart" style={{right:"1px"}}>
              <ShoppingCart size={32} color="#fff" />
            </Link>
          </div>
        </nav>
      </Fragment>
    );
  }
}

export default Navbar;
