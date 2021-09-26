import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <footer className="footer text-white">
            <p>
                Copyright © Rakibul Islam 2021 | a Programming Hero larner.
            </p>
            <div className="d-flex text-white fs-1">
                <i className="fab fa-facebook me-3"></i>
                <i className="fab fa-twitter me-3"></i>
                <i className="fab fa-instagram me-3"></i>
                <i className="fab fa-whatsapp me-3"></i>

            </div>
        </footer>
    );
};

export default Footer;