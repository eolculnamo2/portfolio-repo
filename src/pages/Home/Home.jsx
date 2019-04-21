/* eslint-disable no-unused-vars */
import React from 'react';
import './Home.scss';
import { AboutMe, HomeScreen, Projects, Contact } from '../../components/home-components/';

// for header scrollTo function

function Home(props) {
  const {
    homeRef,
    aboutMeRef,
    projectsRef,
    contactRef,
  } = props;
  return(
    <>
      <HomeScreen homeRef={homeRef} />
      <AboutMe aboutMeRef={aboutMeRef} />
      <Projects projectsRef={projectsRef} />
      <Contact contactRef={contactRef} />
    </>
  )
}

export default Home;
