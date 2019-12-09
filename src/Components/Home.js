import React, { Component } from 'react';
import { findByLabelText } from '@testing-library/dom';
import '../Styles/index.css';

class HomePage extends Component {
  render() {    
    return (
      <div>
        <h1>Welcome to Ramenating</h1>
        <div className="homepageImage">   
            <img src="https://www.goodfreephotos.com/albums/vector-images/ramen-bowl-nori-vector-clipart.png" title="From https://www.goodfreephotos.com" alt="downarrow" id= "homePageRamen" />
        </div>
      </div>
    )
  }
}
export default HomePage;