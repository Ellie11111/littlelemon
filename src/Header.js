import React from 'react';
import './Header.css'; // Assuming you have some CSS for styling
import logo from './logo192.png'; // Assuming you have a logo image
const Header = () => {
    return (
        <header className="header">
            <img src={logo} alt="Little Lemon Logo" />
            <h1>Little Lemon</h1>
            <nav>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#reserve">Reserve</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;