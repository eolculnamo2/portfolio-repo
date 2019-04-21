/* eslint-disable no-unused-vars */
import React from 'react';
//import MeAndJack from '../../../../assets/dist/images/meandjack.jpg';
import './AboutMe.scss';

function AboutMe(props) {
  const { aboutMeRef } = props;
  return (
    <>
      <h1 className="home-section-heading" ref={aboutMeRef}>About</h1>
      <div className="about-wrap">
        <img
          alt="About Rob Bertram"
          className="about-img"
          src="/images/meandjack.jpg"
        />
        <div className="about-text-wrap">
          <h1 className="about-js-life">JavaScript === Life</h1>
          <p className="about-text">
            I love programming. I started teaching myself in March of 2017 as a hobby with no thought of
            doing it professionally. I was drawn by the way it challenged me to engage and solve hard problems -- I was completely addicted.
            As a full time front end developer, I now get to do what I love full time.
            At work, I strive to build web applications as cleanly and efficiently as possible. Every night, I continue
            to work on code or code related subjects to fuel my passion for programming whether that be learning linear algebra,
            learning C++ or Java, or just building fun MERN stack projects.
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
