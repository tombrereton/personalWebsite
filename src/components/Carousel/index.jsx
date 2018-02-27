import React from 'react';
import { Carousel as ReactCarousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './style.css';

const Carousel = () => (
  <ReactCarousel
    showArrows={false}
    showThumbs={false}
    showStatus={false}
    showIndicators={false}
    infiniteLoop={true}
    dynamicHeight={true}
    transitionTime={800}
    stopOnHover={false}
    autoPlay>
    <img src="https://picsum.photos/520/649" />
    <img src="https://picsum.photos/520/650" />
    <img src="https://picsum.photos/520/652" />
  </ReactCarousel>
);

export default Carousel;
