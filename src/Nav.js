import React from 'react';
import { Link } from 'react-router-dom';
import logo from './images/Logo.svg';

const Nav = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? 'open' : ''}`}>
            {/* <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a> */}


<Link to="/" className='logo'>
        <img src={logo} alt='logo' />
      </Link>
            <div className='menu-icon' onClick={toggleMenu}>
                <div className='bar'></div>
                <div className='bar'></div>
                <div className='bar'></div>
            </div>
            <ul className={`nav-links ${menuOpen ? 'visible' : ''}`}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/booking">Booking</Link></li>
                <li><Link to="/order">Order online</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;
