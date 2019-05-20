import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Carousel>
                <div>
                    <img src="/images/slide1.png" />
                    <p className="legend">Wel come to Slider 1</p>
                </div>
                <div>
                    <img src="/images/slide2.png" />
                    <p className="legend">Wel come to Slider 2</p>
                </div>
            </Carousel>
    );
  }
}


export default Banner;
