import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Button } from './Button';
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false); //state for menu responsiveness
    const [button, setButton] = useState(true); //state for button styling

    const handleClick = () => setClick(!click);
    const closeResMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, []);
    

    window.addEventListener('resize', showButton)

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
                {button && <Button buttonStyle='btn--outline'>Sign Up</Button>}
                {button && <Button buttonStyle='btn--outline'>Log in</Button>}
            </div>
        </nav>
    </Fragment>
  )
}

export default Navbar