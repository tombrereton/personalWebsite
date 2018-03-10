import React from 'react';
import { NavLink } from 'react-router-dom'


import './style.css';

const Footer = () => (
  <nav>
    <div className="footerContainer">
      <NavLink exact to="/" className="footerLink" activeStyle={{fontSize:'1.8em'}}><i className="fas fa-home"></i></NavLink>
      <NavLink exact to="/projects" className="footerLink" activeStyle={{fontSize:'1.8em'}}><i className="far fa-folder-open"></i></NavLink>
      <NavLink exact to="/blog" className="footerLink" activeStyle={{fontSize:'1.8em'}}><i className="far fa-newspaper"></i></NavLink>
      <NavLink exact to="/contact" className="footerLink" activeStyle={{fontSize:'1.8em'}}><i className="far fa-address-card"></i></NavLink>
    </div>
  </nav>
)

export default Footer;
