import React from "react";
import { LinkedIn, Twitter, Facebook, Instagram } from "../Icons/Icons";

const Footer = () => {
    return(
        <footer className="footer" id="contact">
            <h2 className="footer__logo">tec<span>hathon</span></h2>
            <nav className="footer__nav">
                <ol className="footer__nav-list">
                    <li className="footer__nav--item"> <a href="/" className="footer__nav--link">Home</a></li>
                    <li className="footer__nav--item"> <a href="/" className="footer__nav--link">speakers</a></li>
                    <li className="footer__nav--item"> <a href="/" className="footer__nav--link">schedule</a></li>
                    <li className="footer__nav--item"> <a href="/" className="footer__nav--link">blog</a></li>
                    <li className="footer__nav--item"> <a href="/" className="footer__nav--link">contact</a></li>
                </ol>
            </nav>
            <p className="footer__copyright">Made with <span>&hearts;</span> by <a href="https://www.linkedin.com/in/otwoma" className="footer__copyright-name">Otwoma dennis</a> | Use the template ethically.</p>
            <div className="footer__social">
                <a href="/" className="footer__social--link"><LinkedIn /></a>
                <a href="/" className="footer__social--link"><Twitter /></a>
                <a href="/" className="footer__social--link"><Facebook /></a>
                <a href="/" className="footer__social--link"><Instagram /></a>
            </div>
        </footer>
    )
}

export default Footer;