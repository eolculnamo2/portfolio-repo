/* eslint-disable no-unused-vars */
import React from 'react';
import ScrollTo from '../../modules/ScrollTo';
import './Header.scss';

function Header(props) {
  const {
    homeRef,
    aboutMeRef,
    projectsRef,
    contactRef,
  } = props;

  const scrollTo = reference => new ScrollTo(reference, 2);
  // window.scrollTo({ top: reference.current.offsetTop-50, behavior: 'smooth' });

  return (
    <div className="header-wrap">
      <ul className="header-links">
        <li onClick={() => scrollTo(homeRef,2)}>Home</li>
        <li onClick={() => scrollTo(aboutMeRef,2)}>About</li>
        <li onClick={() => scrollTo(projectsRef,2)}>Projects</li>
        <li onClick={() => scrollTo(contactRef,2)}>Contact</li>
      </ul>
    </div>
  )
}

export default Header;
