// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faPhone } from '@fortawesome/free-solid-svg-icons';


function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Service client</h3><br></br>
                    <a href="/faq">Questions fréquentes</a><br></br>
                    <a href="/contact">Contactez-nous</a><br></br>
                    <FontAwesomeIcon icon={faPhone} /> +21260000025
                </div>
                <div className="footer-section">
                    <h3>Service recyclage</h3><br></br>
                    <a href="/vente">Vente de produits recyclés</a><br></br>
                    <a href="/produits">Achat de produits recyclés</a><br></br>
                </div>
                <div className="footer-section">
                    <h3>Liens utiles</h3><br></br>
                    <a href="/privacy-policy">Politique de confidentialité & cookies</a><br></br>
                    <a href="/terms-of-use">Conditions d'utilisation</a><br></br>
                    <a href="/cookie-preferences">Préférences de cookies</a>
                </div>
                <div className="footer-section">
                    
                    <div className="social-icons">
                        <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebook} size="2x"/></a><br></br><br></br>
                        <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" /></a><br></br><br></br>
                        <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a><br></br><br></br>
                        <FontAwesomeIcon icon={faPhone} size="2x" style={{ color: 'black' }} />

                    </div>
                </div>
            </div>
            <div className="copyright">
                <br></br>
                <p>Copyright © 2024. All Rights Reserved</p>
            </div>
        </footer>
    );
}

export default Footer;
