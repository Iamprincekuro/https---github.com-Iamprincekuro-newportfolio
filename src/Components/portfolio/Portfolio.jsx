import React from 'react'
import './portfolio.css'
import logo from '../../../src/assets/logo.jpg'
import a1 from '../../../src/assets/a1.jpg'
import a2 from '../../../src/assets/a2.jpg'
import a3 from '../../../src/assets/a3.jpg'
import a4 from '../../../src/assets/a4.jpg'
import a5 from '../../../src/assets/a5.jpg'

const Portfolio = () => {
  // an array of object to help map through each images using their id
  const data = [
    {
      id: 1,
      image: logo,
      title: 'Logo image portfolio',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://twitter.com/iamprincekuro',
    },
    {
      id: 2,
      image: a1,
      title: 'A1 image portfolio',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/gray-and-white-robot-73910/',
    },
    {
      id: 3,
      image: a2,
      title: 'A2 image portfolio',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/high-angle-photo-of-robot-2599244/',
    },
    {
      id: 4,
      image: a3,
      title: 'A3 image portfolio',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/woman-leaning-on-desk-3183135/',
    },
    {
      id: 5,
      image: a4,
      title: 'A4 image portfolio',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/crop-african-american-student-studying-craters-of-moon-on-tablet-at-observatory-3825569/',
    },
    {
      id: 6,
      image: a5,
      title: 'A5 image portfolio',
      github: 'https://github.com/iamprincekuro',
      demo: 'https://pexels.com/photo/person-controlling-flight-simulator-3862634/',
    },
  ]
  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
      data.map(({id, image, title, github, demo}) => {
        return (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn" target="_blank">
                Git Hub
              </a>
              <a href={demo} className="btn" target="_blank">
                {' '}
                Live Demo
              </a>
            </div>
          </article>
        )
      })}

      </div>
    </section>
  )
}

export default Portfolio
/*
 <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logo} alt="Portfolio image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Git Hub
            </a>
            <a
              href="https://www.dribbble.com/iamprincekuro"
              className="btn"
              target="_blank"
            >
              {' '}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logo} alt="Portfolio image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Git Hub
            </a>
            <a
              href="https://www.dribbble.com/iamprincekuro"
              className="btn"
              target="_blank"
            >
              {' '}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logo} alt="Portfolio image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Git Hub
            </a>
            <a
              href="https://www.dribbble.com/iamprincekuro"
              className="btn"
              target="_blank"
            >
              {' '}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logo} alt="Portfolio image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Git Hub
            </a>
            <a
              href="https://www.dribbble.com/iamprincekuro"
              className="btn"
              target="_blank"
            >
              {' '}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logo} alt="Portfolio image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Git Hub
            </a>
            <a
              href="https://www.dribbble.com/iamprincekuro"
              className="btn"
              target="_blank"
            >
              {' '}
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={logo} alt="Portfolio image" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio__item-cta">
            <a href="https://www.github.com" className="btn" target="_blank">
              Git Hub
            </a>
            <a
              href="https://www.dribbble.com/iamprincekuro"
              className="btn"
              target="_blank"
            >
              {' '}
              Live Demo
            </a>
          </div>
        </article>
*/
