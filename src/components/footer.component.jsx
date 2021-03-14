import React from 'react';

import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import '../index.css'


const Footer = () => {
    return (
        <div className="footer-container">
            <div className="social-media-section">
                {/* <h5>Follow Me</h5> */}
                <a href="http://www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter size={30} /></a>
                <a href="http://www.facebook.com" target="_blank" rel="noreferrer"><FaFacebook size={30} /></a>
                <a href="http://www.instagram.com" target="_blank" rel="noreferrer"><FaInstagram size={30} /></a>
                <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><FaLinkedin size={30} /></a>
                
            </div>
            <h5 className="d-flex ml-auto"> contactMe@6477619491 or bistarajesh@outlook.com</h5>
        </div>
    );
}

export default Footer;
