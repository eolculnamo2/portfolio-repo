/* eslint-disable no-unused-vars */
import React, {useState} from 'react';
import ScrollTo from '../../modules/ScrollTo';
import './Header.scss';

function Header(props) {

  const [hState, changeState] = useState({mobileOpen: false});

  const scrollTo = reference => {
    new ScrollTo(reference, 2)
    changeState({mobileOpen: false})
  };
  // window.scrollTo({ top: reference.current.offsetTop-50, behavior: 'smooth' });

  const toggleHamburger = () => changeState({mobileOpen: !hState.mobileOpen});

  const {
    homeRef,
    aboutMeRef,
    projectsRef,
    contactRef,
  } = props;

  return (
    <div className="header-wrap">
      <div className={`header-hamburger-wrap ${hState.mobileOpen ? 'header-hamburger-wrap--open':''}`} onClick={toggleHamburger}>
        <div className="header-hamburger-line line1" />
        <div className="header-hamburger-line line2" />
        <div className="header-hamburger-line line3" />
      </div>
      <ul
        className={`header-links ${hState.mobileOpen ? 'header-links--mobile-open':''}`}>
        <li onClick={() => scrollTo(homeRef,2)}>Home</li>
        <li onClick={() => scrollTo(aboutMeRef,2)}>About</li>
        <li onClick={() => scrollTo(projectsRef,2)}>Projects</li>
        <li onClick={() => scrollTo(contactRef,2)}>Contact</li>
      </ul>
    </div>
  )
}

export default Header;
