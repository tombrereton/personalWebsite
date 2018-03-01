import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import './style.css';

const Layout = (props) => (
  <div className="layoutContainer">
    <Header />
    {props.children}
    <div className="emptyDiv">
    </div>
    <Footer />
  </div>
)

export default Layout;