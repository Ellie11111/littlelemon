import React from "react";
import logo from './images/Logo.svg';

const Footer = () => {
    return (
        <footer>
            <section className="footer-container">
                <div className="company-info">
                    <img src={logo} alt=''/>
                    <p>We are a family owned Mediterranean restaurant,focused on traditional recipes servred with modern twist</p>
                </div>
                <div className="footer-links">
                    <h4> Important links</h4>
                    <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>  
                    <li><a href="/booking">Booking</a></li>
                    <li><a href="/order">Order online</a></li>
                    <li><a href="/login">Login</a></li> 
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4> Contact Us</h4>
                    <ul>
                    <li>Phone: 123-456-7890</li>
                    <li>Email: littlelemon@gmail.com </li>
                    <li> Address: <br/> 123 avmiik, IL</li>
                    </ul>
                </div>
                <div className="social-media">
                    <h4> Follow Us</h4>
                    <ul>
                        <li>facebook</li>
                        <li>Instagram</li>
                        <li>Twitter</li>
                    </ul>

                </div>
            </section>

        </footer>
    );
};

export default Footer;