/* eslint-disable no-unused-vars */
import React from 'react';
import MeAndJack from '../../../../assets/images/meandjack.jpg';
import './AboutMe.scss';

function AboutMe() {
  return (
    <>
      <h1 className="home-section-heading">About</h1>
      <div className="about-wrap">
        <img
          alt="About Rob Bertram"
          className="about-img"
          src={MeAndJack}
        />
        <div className="about-text-wrap">
          <h1 className="about-js-life">JavaScript === Life</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus magna vel tortor porttitor ultricies. Pellentesque nunc ipsum, porta non diam et, fringilla ultricies velit. Pellentesque nisi nisi, convallis tincidunt enim nec, dictum ultrices leo. Fusce nisi lectus, suscipit at laoreet at, euismod quis metus. Nam pharetra pharetra commodo. Praesent nec orci ac ante venenatis efficitur vel vitae est. Nullam fermentum rutrum quam, eu tempor lorem dapibus at. Donec eu diam molestie, ultricies ex a, rutrum dui.
          </p>
          <h3 className="about-all-caps-h">Technologies</h3>
          <div className="about-skills-wrap">
            <div className="about-skill">JavaScript</div>
            <div className="about-skill">CSS</div>
            <div className="about-skill">HTML</div>
            <div className="about-skill">React</div>
            <div className="about-skill">VueJS</div>
            <div className="about-skill">NodeJS</div>
            <div className="about-skill">MongoDB</div>
            <div className="about-skill">Webpack</div>
            <div className="about-skill">Java</div>
            <div className="about-skill">Spring</div>
            <div className="about-skill">Hibernate</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AboutMe;
