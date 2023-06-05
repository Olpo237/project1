import React from 'react'
import './about.css'
import ME from '../../assets/4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
    return(
        <section id='about'>
         <h5>Get To Know</h5>
         <h2>About Me</h2>

        <div className='container about__container'>
            <div className="about__me">
                <div className="about__me-image">
                    <img src={ME} alt="About " />
                </div>

            </div>

            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                    <FaAward classNameabout__icon/>
                    <h5>Exeperience</h5>
                    <small>6 Weeks Internship Working</small>
                    </article>
                    <article className='about__card'>
                    <FiUsers classNameabout__icon/>
                    <h5>Clients</h5>
                    <small>4 clients</small>
                    </article>
                    <article className='about__card'>
                    <VscFolderLibrary classNameabout__icon/>
                    <h5>Projects</h5>
                    <small>8 Completed Projects</small>
                    </article>
                </div>
                <p>During my holydays is used to find some intership for me to aquire some experience before graduating from school, and today i can feel like i made a good decision becaus i am really progressing</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
            </div>

        </div>

        </section>
    )
}

export default About