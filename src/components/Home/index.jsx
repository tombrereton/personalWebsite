import React from 'react';
import Carousel from '../Carousel';
import './style.css';
import Layout from '../Layout';

const Home = () => (
  <Layout>
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
  </Layout>
);

export default Home;
