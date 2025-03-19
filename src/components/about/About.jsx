import React from 'react'
import './about.css'
import {GiGraduateCap} from 'react-icons/gi'
import {BsBookmarkStar} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'

const About = () => {
  return (
    <section id='about'>
      
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">

          {/* <div className="about__me">
            <div className="about__me-title ">  
                <div>
                   My Name Is 
                  <br />Harsh Dobariya.
                </div>
            </div>
          </div> */}

          <div className="about__content">
            <div className="about__cards">

              <article className='about__card'>
                  <GiGraduateCap className='about__icon'/>
                  <h5>Degree</h5>
                  <small>Bca. Web Developer(UG) <br /><i>University of Gandhinagar.</i></small>
              </article>

              <article className='about__card'>
                  <BsBookmarkStar className='about__icon'/>
                  <h5>Current Loction</h5>
                  <small>Surat</small>
              </article>

              <article className='about__card'>
                  <TfiWorld className='about__icon'/>
                  <h5>Domains</h5>
                  <small>
                    <ul>
                      
                      <li>Odoo</li>
                      <li>Mobile Applications</li>
                    </ul>
                  </small>
              </article>

              

            </div>
            <p>
                    I’m <b><b>Harsh Dobariya</b></b>, a passionate web developer, designer, and instructor dedicated to teaching and coding. Currently pursuing a BCA at Swarnim Startup & Innovation University. I specialize in React and front-end development.
                    I am an adaptable and quick learner, always eager to enhance my skills and contribute to creating exceptional web experiences. My love for continuous learning drives me to inspire others and help them achieve their goals. With a strong technical foundation and dedication, I strive to be a valuable asset to any team.
                    
            </p>

          </div>
      </div>
    </section>
  )
}

export default About