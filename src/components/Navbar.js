import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false); //state for menu responsiveness
    const [btn, setBtn] = useState(true); //state for button styling

    const handleClick = () => setClick(!click);
    const closeResMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setBtn(false)
        } else {
            setBtn(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    

    window.addEventListener('resize', showButton)

    const btnStyle = {
        backgroundColor: "transparent",
        color: "#FFF",
        padding: "8px 20px",
        border: "1px solid var(--primary)",
        transition: "all 0.35s ease-out"
    }

  return (
    <Fragment>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo" onClick={closeResMenu}>
                    PEPERUKA <i className="fa-solid fa-truck-ramp-box fa-bounce" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/" className='nav-links' onClick={closeResMenu}>
                            Home
                        </Link>
                    </li>
                    {/* <li className='nav-item'>
                        <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                            Coming Soon
                        </Link>
                    </li> */}
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeResMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/sign-up" className='nav-links-res' onClick={closeResMenu}>
                            Sign Up
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to="/log-in" className='nav-links-res' onClick={closeResMenu}>
                            Log In
                        </Link>
                    </li>
                </ul>
                <Link to ="/sign-up">
                    {btn && <button style={btnStyle}>Sign Up</button>}
                </Link>
                <Link to ="/log-in">
                    {btn && <button style={btnStyle}>Log in</button>}
                </Link>
            </div>
        </nav>
    </Fragment>
  )
}

export default Navbar