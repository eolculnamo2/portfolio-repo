/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Project from './subcomponents/Project';
import './Projects.scss';

const initialState = {
  projects: [
    {
      title: 'HEMA Site',
      technologies: ['React', 'SCSS', 'NodeJS', 'MongoDB'],
      description: 'A website I created and maintain for Historical European Martial Arts.',
      githubLink: 'https://github.com/eolculnamo2/hema-site',
      projectLink: 'https://www.sword-point.com',
    },
    {
      title: 'Dashboard Project',
      technologies: ['Vue', 'SCSS', 'Java', 'MySQL'],
      description: 'A Dashboard I created to practice Java, SpringMVC, and Hibernate.',
      githubLink: 'https://github.com/eolculnamo2/dashboard-project',
      projectLink: 'https://github.com/eolculnamo2/dashboard-project',
    },
    {
      title: 'JsToScss Plugin',
      technologies: ['JavaScript', 'Custom Webpack Plugin'],
      description: 'A custom webpack plugin I created that converts JavaScript object values into SCSS values for when projects need style related values in both JS and SCSS. This plugin prevents you from needing to update in two places.',
      githubLink: 'https://github.com/eolculnamo2/JsToScssPlugin',
      projectLink: 'https://github.com/eolculnamo2/JsToScssPlugin',
    },
  ]
};

function Projects(props) {
  const [state, changeState] = useState(initialState);

  const {projectsRef} = props;
  return (
    <div className="projects-wrap" ref={projectsRef}>
      <h1 className="home-section-heading home-section-heading--white">Projects</h1>
      {state.projects.map( x => <Project project={x} key={x.githubLink} /> )}
    </div>
  )
}

export default Projects;
