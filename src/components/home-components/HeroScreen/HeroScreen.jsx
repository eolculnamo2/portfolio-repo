/* eslint-disable no-unused-vars */
import React from 'react';
import DallasPic from '../../../../assets/images/dallas.png';
import './HomeScreen.scss';

function HomeScreen() {
  return (
    <div className="home-img-wrap">
      <div className="home-text-wrap">
        <h1>Rob Bertram</h1>
        <h3>Front End Developer</h3>
      </div>
      <img
        alt="Dallas Front End Developer"
        className="home-hero"
        src={DallasPic}
      />
    </div>
  )
}

export default HomeScreen;
