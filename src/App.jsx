/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home, GitHubProjects, LayersTool } from './pages';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

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
      <Switch>
        <Route exact path="/" render={props => (
          <Home
            {...props}
            homeRef={homeRef}
            aboutMeRef={aboutMeRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
          )}
        />
        <Route exact path="/github-projects" component={GitHubProjects} />
        <Route exact path="/layers-tool" component={LayersTool} />
      </Switch>
      <Footer />
    </>
  )
}

export default App;
