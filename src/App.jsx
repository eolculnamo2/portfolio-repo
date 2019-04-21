/* eslint-disable no-unused-vars */
import React from 'react';
import './App.scss';
import { Home } from './pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Refs created for scroll to in Header
const homeRef = React.createRef();
const aboutMeRef = React.createRef();
const projectsRef = React.createRef();
const contactRef = React.createRef();

function App() {
  return (
    <>
      <Header
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
      />
      <Home
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        />
      <Footer />
    </>
  )
}

export default App;
