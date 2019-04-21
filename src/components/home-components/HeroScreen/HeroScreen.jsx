/* eslint-disable no-unused-vars */
import React from 'react';
//import DallasPic from '../../../../assets/images/dallas.png';
import './HomeScreen.scss';

function HomeScreen(props) {
  const { homeRef } = props;
  return (
    <div className="home-img-wrap" ref={homeRef}>
      <div className="home-text-wrap">
        <h1>Rob Bertram</h1>
        <h3>Front End Developer</h3>
      </div>
      <img
        alt="Dallas Front End Developer"
        className="home-hero"
        src="/images/dallas.png"
      />
    </div>
  )
}

export default HomeScreen;
