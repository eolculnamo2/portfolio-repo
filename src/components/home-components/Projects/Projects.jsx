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
      githubLink: 'www.github.com',
      projectLink: 'www.sword-point.com',
    }
  ]
};

function Projects() {
  const [state, changeState] = useState(initialState);
  return (
    <div className="projects-wrap">
      {state.projects.map( x => <Project project={x} /> )}
    </div>
  )
}

export default Projects;
