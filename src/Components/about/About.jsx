import React from 'react'
import './about.css'
import dp1 from '../../assets/dp1.jpg'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>Prince Kuro</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={dp1} alt="Kuro's picture" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>4+ years working experience</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>6+ clients</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ projects</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
            explicabo recusandae? Qui distinctio ea quisquam velit aliquam saepe
            illum adipisci harum non odit sint dignissimos labore, iste
            veritatis iusto error.
          </p>

          <a href='#contact' className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
