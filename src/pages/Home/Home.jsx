/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.scss';
import { AboutMe, HomeScreen, Projects } from '../../components/home-components/';

function Home() {
  return(
    <>
      <HomeScreen />
      <AboutMe />
      <Projects />
    </>
  )
}

export default Home;
