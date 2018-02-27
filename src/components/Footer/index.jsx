import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => (
  <div className="footerContainer">
    <Link to="/" className="footerLink"><i className="fas fa-home"></i></Link>
    <Link to="/projects" className="footerLink"><i className="far fa-folder-open"></i></Link>
    <Link to="/blog" className="footerLink"><i className="far fa-newspaper"></i></Link>
    <Link to="/contact" className="footerLink"><i className="far fa-address-card"></i></Link>
  </div>
)

export default Footer;
