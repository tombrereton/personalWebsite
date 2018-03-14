import React from 'react';
import { NavLink } from 'react-router-dom'
import './style.scss';

const Footer = () => (
  <nav>
    <div className="footerContainer">
      <NavLink exact to="/" className="footerLink" activeClassName="selected">
        <i className="fas fa-home"></i>
        <span className="linkText">home</span>
      </NavLink>
      <NavLink exact to="/projects" className="footerLink" activeClassName="selected">
        <i className="far fa-folder-open"></i>
        <span className="linkText">projects</span>
      </NavLink>
      <NavLink exact to="/blog" className="footerLink" activeClassName="selected" >
        <i className="far fa-newspaper"></i>
        <span className="linkText">blog</span>
      </NavLink>
      <NavLink exact to="/contact" className="footerLink" activeClassName="selected" >
        <i className="far fa-address-card"></i>
        <span className="linkText">contact</span>
      </NavLink>
    </div>
  </nav >
)

export default Footer;
