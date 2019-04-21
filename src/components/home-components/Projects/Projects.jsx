/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Project from './subcomponents/Project';
import './Projects.scss';

const initialState = {
  projects: [
    {
      title: 'HEMA Site',
      technologies: ['React', 'SCSS', 'NodeJS', 'MongoDB'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus magna vel tortor porttitor ultricies. Pellentesque nunc ipsum.',
      githubLink: 'https://www.github.com',
      projectLink: 'https://www.sword-point.com',
    },
    {
      title: 'HEMA Site',
      technologies: ['React', 'SCSS', 'NodeJS', 'MongoDB'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus magna vel tortor porttitor ultricies. Pellentesque nunc ipsum.',
      githubLink: 'https://www.github.com',
      projectLink: 'www.sword-point.com',
    },
    {
      title: 'HEMA Site',
      technologies: ['React', 'SCSS', 'NodeJS', 'MongoDB'],
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus magna vel tortor porttitor ultricies. Pellentesque nunc ipsum.',
      githubLink: 'https://www.github.com',
      projectLink: 'www.sword-point.com',
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
