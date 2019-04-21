/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.scss';
import { AboutMe, HomeScreen, Projects, Contact } from '../../components/home-components/';

function Home() {
  return(
    <>
      <HomeScreen />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default Home;
