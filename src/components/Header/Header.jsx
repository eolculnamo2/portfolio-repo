/* eslint-disable no-unused-vars */
import React from 'react';
import './Header.scss';

function Header(props) {
  const {
    homeRef,
    aboutMeRef,
    projectsRef,
    contactRef,
  } = props;

  const scrollTo = reference => window.scrollTo({ top: reference.current.offsetTop-50, behavior: 'smooth' });

  return (
    <div className="header-wrap">
      <ul className="header-links">
        <li onClick={() => scrollTo(homeRef)}>Home</li>
        <li onClick={() => scrollTo(aboutMeRef)}>About</li>
        <li onClick={() => scrollTo(projectsRef)}>Projects</li>
        <li onClick={() => scrollTo(contactRef)}>Contact</li>
      </ul>
    </div>
  )
}

export default Header;
