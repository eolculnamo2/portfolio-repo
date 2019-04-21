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
  } = props.project;
  return (
    <div className="project-wrap">
      <div>
        <h1 className="project-title">{title}</h1>
        <div className="project-flex-technologies">
          {technologies.map( x => <h3 key={x}>{x}</h3>)}
        </div>
      </div>
      <div className="project-right-wrap">
        <span className="project-description-text">{description}</span>
        <div className="project-button-wrap">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>GitHub</button>
          </a>
          <a
            href={projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>Project</button>
          </a>
        </div>
      </div>
    </div>
  )
}

Project.defaultProps = {
  project: {
      title: '',
      technologies: [],
      description: '',
      githubLink:'',
      projectLink: '',
    },
}

Project.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string,
    technologies: PropTypes.arrayOf(PropTypes.string),
    description: PropTypes.string,
    githubLink: PropTypes.string,
    projectLink: PropTypes.string,
  }),
}

export default Project;
