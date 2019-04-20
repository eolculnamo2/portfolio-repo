/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import './Project.scss';

function Project(props) {
  const {
    title,
    technologies,
    description,
    githubLink,
    projectLink,
  } = props;
  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

Project.defaultProps = {
  title: '',
  technologies: [],
  description: '',
  githubLink: '',
  projectLink: '',
}

Project.propTypes = {
  title: PropTypes.string,
  technologies: PropTypes.array,
  description: PropTypes.string,
  githubLink: PropTypes.string,
  projectLink: PropTypes.string,
}

export default Project;
