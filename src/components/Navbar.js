import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false); //state for menu responsiveness

    const handleClick = () => setClick(!click);
    const closeResMenu = () => setClick(false);
  return (
    <Fragment>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className="navbar-logo">
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
                    <li className='nav-item'>
                        <Link to="/soon" className='nav-links' onClick={closeResMenu}>
                            Coming Soon
                        </Link>
                    </li>
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
                        <Link to="/sign-in" className='nav-links-res' onClick={closeResMenu}>
                            Log In
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    </Fragment>
  )
}

export default Navbar