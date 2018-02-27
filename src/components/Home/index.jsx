import React from 'react';
import Carousel from '../Carousel';
import './style.css';

const Home = () => (
  <div className='homeContainer'>
    <div className='homeImageContainer'>
      <Carousel />
    </div>
    <div className='homeTextOnImage'>
      <p>Logo</p>
      <p>Company</p>
      <p>Name</p>
    </div>
  </div>
);

export default Home;
